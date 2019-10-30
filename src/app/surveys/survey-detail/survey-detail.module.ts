import {NgModule} from '@angular/core';
import {SurveyQuestionTabComponent} from './survey-question-tab/survey-question-tab.component';
import {SurveyAnswerTabComponent} from './survey-answer-tab/survey-answer-tab.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SurveyDetailRoutingModule} from './survey-detail-routing.module';
import {SurveyDetailComponent} from './survey-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SurveyDetailRoutingModule
  ],
  declarations: [
    SurveyDetailComponent,
    SurveyQuestionTabComponent,
    SurveyAnswerTabComponent
  ]
})
export class SurveyDetailModule { }
