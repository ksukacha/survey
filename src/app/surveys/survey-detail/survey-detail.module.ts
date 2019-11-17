import {NgModule} from '@angular/core';
import {SurveyQuestionTabComponent} from './survey-question-tab/survey-question-tab.component';
import {SurveyAnswerTabComponent} from './survey-answer-tab/survey-answer-tab.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SurveyDetailRoutingModule} from './survey-detail-routing.module';
import {SurveyDetailComponent} from './survey-detail.component';
import {OpenedSurveyService} from './opened-survey.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SurveyDetailRoutingModule
  ],
  declarations: [
    SurveyDetailComponent,
    SurveyQuestionTabComponent,
    SurveyAnswerTabComponent
  ],
  providers: [OpenedSurveyService]
})
export class SurveyDetailModule { }
