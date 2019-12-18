import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SurveyQuestionTabComponent} from './survey-question-tab/survey-question-tab.component';
import {SurveyAnswerTabComponent} from './survey-answer-tab/survey-answer-tab.component';
import {SurveyDetailComponent} from './survey-detail.component';

const routes: Routes = [
  {
    path: 'surveys/:id',
    component: SurveyDetailComponent,
    children: [
      {
        path: 'questions',
        component: SurveyQuestionTabComponent,
      },
      {
        path: 'statistics',
        component: SurveyAnswerTabComponent
      }
    ]
  },
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
