import { Component, OnInit } from '@angular/core';
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
              private fb: FormBuilder) { }

  ngOnInit() {
    this.surveyFormGroup = this.fb.group({
      questions: this.fb.array([])
    });
    this.openedSurvey.getSubject().subscribe(survey => {
      this.survey = survey;
      console.log("from q-tab", this.survey.id);
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
  get answer(): FormGroup {
    return this.fb.group({
      answerName: []
    });
  }
  fillInSurveyFormGroup(): void {
    const questionsControl = this.surveyFormGroup.get('questions') as FormArray;
    let counter = 0;
    this.survey.questions.forEach(q => {
      questionsControl.push(this.patchValues(counter));
      counter++;
    });
  }
  private patchValues(counter): FormGroup {
    let answersFormArray: FormArray = new FormArray([]);
    this.survey.questions[counter].answers.forEach(a => {
      answersFormArray.push(this.fb.group({
        answerName: [a.name]
      }));
    });
    return this.fb.group({
      questionName: [this.survey.questions[counter].name],
      questionType: [this.survey.questions[counter].qType],
      answers: answersFormArray
    });
  }

  private get questions() {
    return this.surveyFormGroup.get('questions') as FormArray;
  }

}
