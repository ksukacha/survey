import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SurveyQuestionTabComponent} from './survey-question-tab/survey-question-tab.component';
import {SurveyAnswerTabComponent} from './survey-answer-tab/survey-answer-tab.component';
import {SurveyDetailComponent} from './survey-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyDetailComponent,
    children: [
      {path: 'question-part', component: SurveyQuestionTabComponent},
      {path: 'answer-part', component: SurveyAnswerTabComponent}
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SurveyDetailRoutingModule { }
