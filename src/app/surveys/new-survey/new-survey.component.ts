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
  addToSurvey: false;
  constructor(private surveyService: SurveysService,
              private topicService: TopicsService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private curItemTypeService: CurItemTypeService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.itemFormGroup = this.fb.group({
      itemName: ['', Validators.required],
      itemDescription: [''],
      elapseDate: ['', /*[Validators.required]*/],

      questions: this.fb.array([this.question])
    });
    this.curItemTypeService.getSubject().subscribe(itemType => this.itemType = itemType);
    this.surveyService.getSubject().subscribe(surveys => this.surveys = surveys);
    this.topicService.getSubject().subscribe(topics => this.topics = topics);
    this.topicService.getSelectedQuestionsToNewSurvey().subscribe(
      selectedQuestions => {
        this.selectedQuestions = selectedQuestions;
        this.addQuestionsFromTopicToSurvey();
      });
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

  onSubmit(): void {
    this.submitted = true;
    if (this.itemFormGroup.valid) {
      const itemName: string = this.itemFormGroup.get('itemName').value;
      const itemDescr: string = this.itemFormGroup.get('itemDescription').value;
      const elapseDate: string = this.itemFormGroup.get('elapseDate').value;
      let q: QuestionModel;
      let a: AnswerModel;
      const qArray: Array<QuestionModel> = [];
      for (const qItem of this.questions.controls) {
        q = new QuestionModel(null, null, []);
        q.name = qItem.get('questionName').value;
        q.qType = qItem.get('questionType').value;
        for (const ansItem of (qItem.get('answers') as FormArray).controls) {
          a = new AnswerModel(null);
          a.name = ansItem.get('answerName').value;
          q.answers.push(a);
        }
        qArray.push(q);
      }
      if (this.isSurveyItem()) {
        this.newSurvey = new Survey(this.surveyService.getSurveysLength(), itemName, itemDescr, elapseDate, null, qArray);
        this.surveyService.addSurvey(this.newSurvey);
        alert('Survey created successfully!');
        this.router.navigate(['home']);
      } else if (this.isTopicItem()) {
        this.newTopic = new TopicModel(this.topicService.getTopicsLength(), itemName, qArray, true);
        this.topicService.addTopic(this.newTopic);
        alert('Topic created successfully');
        this.router.navigate(['topics']);
      }
    } else {
      alert('Please fill in all required fields');
    }
  }

  cancelCreation() {
    this.router.navigate(['home']);
  }


  get question(): FormGroup {
    return this.fb.group({
      questionName: ['', Validators.required],
      questionType: ['', Validators.required],
      answers: this.fb.array([this.answer])
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
      for (let i = 0; i < this.selectedQuestions.length; ++i) {
        this.addQuestion();
        let curQuestion: AbstractControl;
        if (this.questions.controls[this.questions.length - 1].touched) {
          curQuestion = this.questions.controls[this.questions.length - 1];
        } else {
          curQuestion = this.questions.controls[this.questions.length - 2];
        }
        curQuestion.get('questionName').setValue(this.selectedQuestions[i].name);
        curQuestion.get('questionType').setValue(this.selectedQuestions[i].qType);
        const counter = 0;
        for (let j = 0; j < this.selectedQuestions[i].answers.length - 1; ++j) {
          this.addAnswer(curQuestion);
        }
        for ( let k = 0; k < this.selectedQuestions[i].answers.length; ++k) {
          (curQuestion.get('answers') as FormArray).controls[k].get('answerName').setValue(this.selectedQuestions[i].answers[k].name);
        }
      }
    }
  }
}
