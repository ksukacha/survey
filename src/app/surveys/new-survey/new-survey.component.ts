import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
              private router: Router) { }

  ngOnInit(): void {
    this.newSurveyFormGroup = new FormGroup({
      surveyName: new FormControl('', Validators.required),
      surveyDescription: new FormControl(''),
      elapseDate: new FormControl('', [Validators.required]),
      questionName: new FormControl('', Validators.required),
      questionType: new FormControl('', Validators.required),
      answerName: new FormControl('', Validators.required)
    });
    // this.surveyService.getSurveys().subscribe(surveys => this.surveys = surveys);
    // this.surveyService.getSubject().subscribe(newSurvey => this.surveys.push(newSurvey));
    this.surveyService.getSubject().subscribe(surveys => this.surveys = surveys);
  }
  private get surveyName() { return this.newSurveyFormGroup.get('surveyName'); }
  private get surveyDescription() { return this.newSurveyFormGroup.get('surveyDescription'); }
  private get elapseDate() {return this.newSurveyFormGroup.get('elapseDate'); }
  private get questionName() { return this.newSurveyFormGroup.get('questionName'); }
  private get questionType() { return this.newSurveyFormGroup.get('questionType'); }
  private get answerName() { return this.newSurveyFormGroup.get('answerName'); }
  pickAnswerType(e): void {
    this.newSurveyFormGroup.get('questionType').setValue(e.target.value, {
      onlySelf: true
    });
    const questionType = this.newSurveyFormGroup.get('questionType').value;
    this.choice = questionType.substring(3);
  }
  onSubmit(): void {
    this.submitted = true;
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
    this.surveyService.addSurvey(this.newSurvey);
  }
  cancelCreation() {
    this.router.navigate(['home']);
  }
}
