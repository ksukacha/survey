import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SurveysService} from '../../surveys.service';
import {Survey} from '../../model/survey.model';
import {QuestionModel} from '../../model/question.model';
import {Router} from '@angular/router';
import {User} from '../../model/user.model';
import {AnswerModel} from '../../model/answer.model';

@Component({
  selector: 'app-new',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {
  choice: string;
  public newSurveyFormGroup: FormGroup;
  questionTypes = ['single-choice', 'multiple-choice'];
  submitted: boolean;
  newSurvey: Survey;
  surveys: Survey[];
  constructor(private surveyService: SurveysService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newSurveyFormGroup = this.fb.group({
      surveyName: ['', Validators.required],
      surveyDescription: [''],
      elapseDate: ['', [Validators.required]],

      questions: this.fb.array([this.question])
    });
    this.surveyService.getSubject().subscribe(surveys => this.surveys = surveys);
    // this.createQuestion();
  }
  // private get surveyName() { return this.newSurveyFormGroup.get('surveyName'); }
  // private get surveyDescription() { return this.newSurveyFormGroup.get('surveyDescription'); }
  // private get elapseDate() {return this.newSurveyFormGroup.get('elapseDate'); }
  private get questions() {return this.newSurveyFormGroup.get('questions') as FormArray; }
  // private get questionName() { return this.newSurveyFormGroup.get('questionName'); }
  // private get questionType() { return this.newSurveyFormGroup.get('questionType'); }
  // private get answers() {return this.newSurveyFormGroup.get('answers') as FormArray; }
  // private get answerName() { return this.newSurveyFormGroup.get('answerName'); }

  pickAnswerType(e, question): void {
    question.get('questionType').setValue(e.target.value.substring(3), {
      onlySelf: true
    });
    console.log(question.get('questionType').value);
    /*const questionType = question.get('questionType').value;
    this.choice = questionType.substring(3);*/
  }
  onSubmit(): void {
   /* this.submitted = true;
    const surveyName: string = this.newSurveyFormGroup.get('surveyName').value;
    const surveyDescr: string = this.newSurveyFormGroup.get('surveyDescription').value;
    const elapseDate: string = this.newSurveyFormGroup.get('elapseDate').value;
    const questionName: string = this.newSurveyFormGroup.get('questionName').value;
    // console.log(questionName);
    const answerName: string = this.newSurveyFormGroup.get('answerName').value;
    this.newSurvey = new Survey(
      this.surveyService.getSurveysLength(),
      surveyName, surveyDescr, elapseDate,
      null,
      new Array<QuestionModel>(new QuestionModel(questionName, this.choice, new Array<AnswerModel>(new AnswerModel(answerName))))
      );
    this.surveyService.addSurvey(this.newSurvey);*/
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
    (this.newSurveyFormGroup.get('questions') as FormArray).push(this.question);
  }
  private addAnswer(question): void {
    (question.get('answers') as FormArray).push(this.answer);
    console.log('add answer for q: ', this.newSurveyFormGroup.get('questions').get('question'));
  }
  private deleteQuestion(index: number): void {
    if (index !== 0) {
      (this.newSurveyFormGroup.get('questions') as FormArray).removeAt(index);
    }
  }
  private deleteAnswer(question, answerIndex): void {
    if (answerIndex !== 0) {
      (question.get('answers') as FormArray).removeAt(answerIndex);
    }
  }
}
