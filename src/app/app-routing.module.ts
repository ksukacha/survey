import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SurveysComponent} from './surveys/surveys-list/surveys.component';
import {SurveyDetailComponent} from './surveys/survey-detail/survey-detail.component';
import {SurveysSection} from './surveys/surveys-section';
import {SurveyQuestionTabComponent} from './surveys/survey-detail/survey-question-tab/survey-question-tab.component';
import {SurveyAnswerTabComponent} from './surveys/survey-detail/survey-answer-tab/survey-answer-tab.component';
import {NewSurveyComponent} from './surveys/new-survey/new-survey.component';
import {TopicsListComponent} from './topics/topics-list/topics-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: SurveysComponent,
    data: [{section: SurveysSection.MY_SURVEYS}]
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./surveys/survey-detail/survey-detail.module').then(mod => mod.SurveyDetailModule),
  },
  {
    path: 'explore',
    component: SurveysComponent,
    data: [{section: SurveysSection.EXPLORE}]
  },
  {
    path: 'surveys-taken',
    component: SurveysComponent,
    data: [{section: SurveysSection.SURVEYS_TAKEN}]
  },
  {
    path: 'new',
    component: NewSurveyComponent,
    data: [{item: 'Survey'}]
  },
  {
    path: 'drafts',
    component: SurveysComponent,
    data: [{section: SurveysSection.DRAFTS}]
  },
  {
    path: 'topics',
    component: TopicsListComponent,
    data: [{item: 'Topic'}]
  },

 /* {
    path: 'question-part',
    component: SurveyQuestionTabComponent
  },
  {
    path: 'answer-part',
    component: SurveyAnswerTabComponent
  },*/
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
