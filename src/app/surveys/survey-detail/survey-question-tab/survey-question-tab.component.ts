import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {OpenedSurveyService} from '../opened-survey.service';
import {Survey} from '../../../model/survey.model';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AnswerModel} from '../../../model/answer.model';
import {QuestionModel} from '../../../model/question.model';
import {TopicModel} from '../../../model/topic.model';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {SurveyDto} from '../../../model/dto/surveyDto';
import {SurveysService} from '../../../surveys.service';
import {take} from 'rxjs/operators';
import {User} from '../../../model/user.model';
import {TokenServiceService} from '../../../token-service.service';
import {UsersService} from '../../../users.service';

@Component({
  selector: 'app-survey-question-tab',
  templateUrl: './survey-question-tab.component.html',
  styleUrls: ['./survey-question-tab.component.css']
})
export class SurveyQuestionTabComponent implements OnInit, OnDestroy {
  private survey: Survey;
  private surveyFormGroup: FormGroup;
  private subscriptions: Subscription[] = [];
  private loggedUser: User;

  constructor(private openedSurvey: OpenedSurveyService,
              private fb: FormBuilder,
              private surveyService: SurveysService,
              private tokenService: TokenServiceService,
              private userService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.surveyFormGroup = this.fb.group({
      questions: this.fb.array([])
    });
    console.log('came to q tab');
    if (!this.tokenService.isUserTokenPresent()) {
      this.loggedUser = null;
    } else {
      this.subscriptions.push(this.userService.loggedUserSubject.asObservable().subscribe(user => {
        this.loggedUser = user;
      }));
    }
    this.subscriptions.push(this.openedSurvey.getSubject().pipe(take(1)).subscribe(survey => {
      this.survey = survey;
      console.log('from q-tab', this.survey.id);
      this.fillInSurveyFormGroup();
    }));
  }

  get question(): FormGroup {
    return this.fb.group({
      questionName: [],
      questionType: [],
      answers: this.fb.array([])
    });
  }

  // get answer(): FormGroup {
  //   return this.fb.group({
  //     answerName: []
  //   });
  // }
  fillInSurveyFormGroup(): void {
    const questionsControl = this.surveyFormGroup.get('questions') as FormArray;
    let counter = 0;
    this.survey.questions.forEach(() => {
      questionsControl.push(this.patchValues(counter));
      counter++;
    });
  }

  print(val: string) {
    console.log(val);
  }

  private patchValues(counter): FormGroup {
    const answersFormArray: FormArray = new FormArray([]);
    if (this.survey.questions[counter].questionType === 'SINGLE_CHOICE') {
      answersFormArray.push(new FormControl(false));
    } else {
      this.survey.questions[counter].answers.forEach((answer) => {
        const control = new FormControl(false);
        // control.valueChanges.subscribe((value => console.log('question = ', answer.name, 'value', value)));
        answersFormArray.push(control); // initially none of the answers is selected
      });
    }
    return this.fb.group({
      questionName: [this.survey.questions[counter].name],
      questionType: [this.survey.questions[counter].questionType],
      answers: answersFormArray
    });
  }


  get questions() {
    return this.surveyFormGroup.get('questions') as FormArray;
  }

  getSelectedAnswersInQuestion(counterQuestion: number, counterAnswer: number) {
    /*(this.questions.at(counter) as FormArray).controls.map(
     (answer, i) => {
       console.log("answer.value: ", answer.value, "myhobbies[i].value: ", this.survey.questions[counter].answers[i].name);
       return answer.value && this.survey.questions[counter].answers[i].name;
     }
   );*/
    if ((this.questions.at(counterQuestion).get('answers') as FormArray).controls[counterAnswer].value
      && this.survey.questions[counterQuestion].answers[counterAnswer].name) {
      console.log('qCount:', counterQuestion, 'aCount:', counterAnswer, true);
    } else {
      console.log('qCount:', counterQuestion, 'aCount:', counterAnswer, false);
    }
    return (this.questions.at(counterQuestion).get('answers') as FormArray).controls[counterAnswer].value
      && this.survey.questions[counterQuestion].answers[counterAnswer].name;
  }


  collectFieldForPassedSurvey() {
    if (this.surveyFormGroup.valid) {
      // TODO: collect answers for each of the questions
      console.log('valid');
    }
  }

  onSubmit() {
    this.collectFieldForPassedSurvey();

    const userId = this.loggedUser == null ? null : this.loggedUser.id;
    const creatorUserId = this.loggedUser != null && this.survey.authorLogin === this.loggedUser.userName ? this.loggedUser.id.toString() : null;
    // TODO: get actual userId instead of 1;
    // TODO: find out if user with userId is author of this survey, depending on that creatorUserId == userId or null

    this.subscriptions.push(this.surveyService.saveSurvey(this.survey, 1, creatorUserId, 'PASSED').subscribe(() => {
      console.log('survey passed');
      // TODO: add this survey to the user's 'passed surveys' list
      this.loggedUser.passedSurveys.push(this.survey);
      this.router.navigate(['surveys-taken']);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
