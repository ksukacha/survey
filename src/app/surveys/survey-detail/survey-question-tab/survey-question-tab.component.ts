import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {OpenedSurveyService} from '../opened-survey.service';
import {Survey} from '../../../model/survey.model';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AnswerModel} from '../../../model/answer.model';

@Component({
  selector: 'app-survey-question-tab',
  templateUrl: './survey-question-tab.component.html',
  styleUrls: ['./survey-question-tab.component.css']
})
export class SurveyQuestionTabComponent implements OnInit {
  private survey: Survey;
  private surveyFormGroup: FormGroup;

  constructor(private openedSurvey: OpenedSurveyService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.surveyFormGroup = this.fb.group({
      questions: this.fb.array([])
    });
    this.openedSurvey.getSubject().subscribe(survey => {
      this.survey = survey;
      console.log('from q-tab', this.survey.id);
      this.fillInSurveyFormGroup();
    });
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

  private patchValues(counter): FormGroup {
    const answersFormArray: FormArray = new FormArray([]);
    if (this.survey.questions[counter].qType === 'single-choice') {
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
      questionType: [this.survey.questions[counter].qType],
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
}
