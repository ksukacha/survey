import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SurveysService} from '../../surveys.service';
import {Survey} from '../../model/survey.model';
import {QuestionModel} from '../../model/question.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {
  choice: string;
  public newSurveyFormGroup: FormGroup;
  questionTypes = [
    'single-choice', 'multiple-choice'];
  submitted: boolean;
  constructor(private surveyService: SurveysService,
              private router: Router) { }

  ngOnInit(): void {
    this.newSurveyFormGroup = new FormGroup({
      surveyName: new FormControl('', Validators.required),
      surveyDescription: new FormControl(''),
      questionName: new FormControl('', Validators.required),
      questionType: new FormControl('', Validators.required),
      answerName: new FormControl('', Validators.required)
    });
  }
  /*radioClick() {
    this.choice = 'single-choice';
  }
  checkboxClick() {
    this.choice = 'multiple-choice';
  }*/
  private get surveyName() { return this.newSurveyFormGroup.get('surveyName'); }
  private get questionName() { return this.newSurveyFormGroup.get('questionName'); }
  private get questionType() { return this.newSurveyFormGroup.get('questionType'); }
  private get answerName() { return this.newSurveyFormGroup.get('answerName'); }
  pickAnswerType(e): void {
    this.newSurveyFormGroup.get('questionType').setValue(e.target.value, {
      onlySelf: true
    });
    this.choice = this.newSurveyFormGroup.get('questionType').value;
  }
  onSubmit(): void {
    this.submitted = true;
    const surveyName: string = this.newSurveyFormGroup.get('surveyName').value;
    const surveyDescr: string = this.newSurveyFormGroup.get('surveyDescription').value;
    const questionName: string = this.newSurveyFormGroup.get('questionName').value;
    console.log(questionName);
    const questionType: string = this.newSurveyFormGroup.get('questionType').value;
    console.log(questionType);

  }
  cancelCreation() {
    this.router.navigate(['home']);
  }
}
