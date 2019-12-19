import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SurveysService} from '../../surveys.service';
import {Survey} from '../../model/survey.model';
import {QuestionModel} from '../../model/question.model';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {User} from '../../model/user.model';
import {AnswerModel} from '../../model/answer.model';
import {TopicModel} from '../../model/topic.model';
import {TopicsService} from '../../topics/topics.service';
import {CurItemTypeService} from '../../cur-item-type.service';
import {Subscription} from 'rxjs';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-new',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {
  itemType: string;
  public itemFormGroup: FormGroup;
  questionTypes = ['single-choice', 'multiple-choice'];
  submitted: boolean;
  newSurvey: Survey;
  newTopic: TopicModel;
  surveys: Survey[];
  topics: TopicModel[];
  selectedQuestions: QuestionModel[] = [];
  subscriptions: Subscription[] = [];
  loggedUser: User;

  constructor(private surveyService: SurveysService,
              private topicService: TopicsService,
              private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private curItemTypeService: CurItemTypeService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.itemFormGroup = this.fb.group({
      itemName: ['', Validators.required],
      itemDescription: [''],
      elapseDate: ['', [Validators.required]],
      questions: this.fb.array([this.question])
    });
    this.curItemTypeService.getSubject().subscribe(itemType => this.itemType = itemType);
    this.surveyService.getSubject().subscribe(surveys => this.surveys = surveys);
    this.topicService.getSubject().subscribe(topics => this.topics = topics);
    this.usersService.loggedUserSubject.asObservable().subscribe(user => {
      this.loggedUser = user;
    });
    this.topicService.getSelectedQuestionsToNewSurvey().subscribe(
      selectedQuestions => {
        this.selectedQuestions = selectedQuestions;
        this.addQuestionsFromTopicToSurvey();
      });
    if (!this.isSurveyItem()) {
      this.itemFormGroup.removeControl('elapseDate');
      this.itemFormGroup.removeControl('itemDescription');
    }
  }

  private get itemName() {
    return this.itemFormGroup.get('itemName');
  }

  private get itemDescription() {
    return this.itemFormGroup.get('itemDescription');
  }

  private get elapseDate() {
    return this.itemFormGroup.get('elapseDate');
  }

  private get questions() {
    return this.itemFormGroup.get('questions') as FormArray;
  }

  // private get questionName() { return this.itemFormGroup.get('questionName'); }
  // private get questionType() { return this.itemFormGroup.get('questionType'); }
  // private get answers() {return this.itemFormGroup.get('answers') as FormArray; }
  // private get answerName() { return this.itemFormGroup.get('answerName'); }

  pickAnswerType(e, question): void {
    question.get('questionType').setValue(e.target.value.substring(3), {
      onlySelf: true
    });
    console.log(question.get('questionType').value);
    /*const questionType = question.get('questionType').value;
    this.choice = questionType.substring(3);*/
  }

  private collectElapseDateFromJson(object): Date {
    const elapseDate: Date = new Date();
    const array: number[] = Object.values(object);
    elapseDate.setFullYear(array[0], array[1], array[2]);
    /*  let date: Date = new Date(elapseDate.getTime());
      const options = { month: 'long', day: 'numeric' };
      console.log(date.toLocaleString('en-GB', options));*/
    return elapseDate;
  }

  collectFieldForNewItem() {
    if (this.itemFormGroup.valid) {
      const itemName: string = this.itemFormGroup.get('itemName').value;
      const itemDescr: string = this.itemFormGroup.get('itemDescription').value;
      const elapseDate: number = this.collectElapseDateFromJson(this.itemFormGroup.get('elapseDate').value).getTime();
      let q: QuestionModel;
      let a: AnswerModel;
      const qArray: Array<QuestionModel> = [];
      for (const qItem of this.questions.controls) {
        q = new QuestionModel(null, null, []);
        q.name = qItem.get('questionName').value;
       // q.questionType = qItem.get('questionType').value;
        switch (qItem.get('questionType').value) {
          case 'single-choice': q.questionType = 'SINGLE_CHOICE'; break;
          case 'multiple-choice': q.questionType = 'MULTIPLE_CHOICE'; break;
        }
        for (const ansItem of (qItem.get('answers') as FormArray).controls) {
          a = new AnswerModel(null);
          a.name = ansItem.get('answerName').value;
          q.answers.push(a);
        }
        qArray.push(q);
      }
      if (this.isSurveyItem()) {
        return new Survey(this.surveys.length, itemName, itemDescr, elapseDate, /*this.loggedUser.userName*/ 'changeme', qArray);
      } else if (this.isTopicItem()) {
        return new TopicModel(this.topics.length, itemName, qArray, true);
      }
    }
    return null;
  }

  createSurvey(): void {
    this.submitted = true;
    if (this.collectFieldForNewItem() !== null) {
      if (this.isSurveyItem()) {
        this.newSurvey = this.collectFieldForNewItem() as Survey;

        // TODO: get actual userId instead of 1;
        this.subscriptions.push(this.surveyService.saveSurvey(this.newSurvey, this.loggedUser.id, this.loggedUser.id.toString(),   'NEW').subscribe(() => {
           this.surveys.push(this.newSurvey);
           this.surveyService.subject.next(this.surveys);
          //                     this.loggedUser.ownSurveys.push(this.newSurvey);
          /* this.subscriptions.push(this.usersService.updateUser(this.loggedUser, this.loggedUser.id).subscribe(() =>
             this.router.navigate(['surveys'])
           ));*/
        }));
      } else if (this.isTopicItem()) {
        this.newTopic = this.collectFieldForNewItem() as TopicModel;
        this.subscriptions.push(this.topicService.saveTopic(this.newTopic).subscribe(() => {
          this.topics.push(this.newTopic);
          this.topicService.subject.next(this.topics);
          this.router.navigate(['topics']);
        }));
      }
    }
  }

  saveAsDraft(): void {
    this.submitted = true;
    if (this.collectFieldForNewItem() !== null) {
      // this.loggedUser.draftSurveys.push(this.collectFieldForNewItem() as Survey); // collected fields and return survey
      // this.subscriptions.push(this.usersService.updateUser(this.loggedUser, this.loggedUser.id).subscribe(() => {
      //   this.router.navigate(['drafts']);
      // }));
    }
  }

  cancelCreation() {
    this.router.navigate(['surveys']);
  }


  get question(): FormGroup {
    return this.fb.group({
      questionName: ['', Validators.required],
      questionType: ['', Validators.required],
      answers: this.fb.array([this.answer], Validators.minLength(2))
    });
  }

  get answer(): FormGroup {
    return this.fb.group({
      answerName: ['', Validators.required]
    });
  }

  private addQuestion(): void {
    (this.itemFormGroup.get('questions') as FormArray).push(this.question);
  }

  private addAnswer(question): void {
    (question.get('answers') as FormArray).push(this.answer);
  }

  private deleteQuestion(index: number): void {
    if (index !== 0) {
      (this.itemFormGroup.get('questions') as FormArray).removeAt(index);
    }
  }

  private deleteAnswer(question, answerIndex): void {
    if (answerIndex !== 0) {
      (question.get('answers') as FormArray).removeAt(answerIndex);
    }
  }

  isSurveyItem(): boolean {
    return this.itemType === 'Survey';
  }

  isTopicItem(): boolean {
    return this.itemType === 'Topic';
  }

  addQuestionsFromTopicToSurvey(): void {
    if (this.selectedQuestions.length !== 0) {
      for (const question of this.selectedQuestions) {
        this.addQuestion();
        let curQuestion: AbstractControl;
        if (this.questions.controls[this.questions.length - 1].touched) {
          curQuestion = this.questions.controls[this.questions.length - 1];
        } else {
          curQuestion = this.questions.controls[this.questions.length - 2];
        }
        curQuestion.get('questionName').setValue(question.name);
        curQuestion.get('questionType').setValue(question.questionType);
        const counter = 0;
        for (let j = 0; j < question.answers.length - 1; ++j) {
          this.addAnswer(curQuestion);
        }
        for (let k = 0; k < question.answers.length; ++k) {
          (curQuestion.get('answers') as FormArray).controls[k].get('answerName').setValue(question.answers[k].name);
        }
      }
    }
  }
}
