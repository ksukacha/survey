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
import {TopicComponent} from './topics/topic/topic.component';
import {ModalSignUpComponent} from './modals/modal-sign-up/modal-sign-up.component';
import {ModalLoginComponent} from './modals/modal-login/modal-login.component';
import {WelcomeComponent} from './page-parts/welcome/welcome/welcome.component';
// import {AuthUserGuard} from './authguard/auth-user.guard';
// import {AuthAdminGuard} from './authguard/auth-admin.guard';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: ModalLoginComponent
  },
  {
    path: 'register',
    component: ModalSignUpComponent
  },
  {
    path: 'surveys',
    component: SurveysComponent,
    data: [{section: SurveysSection.MY_SURVEYS}],
    // canActivate: [AuthUserGuard]
  },
  // {
  //   path: 'surveys/:id',
  //   loadChildren: () => import('./surveys/survey-detail/survey-detail.module').then(mod => mod.SurveyDetailModule),
  // },
  {
    path: 'explore',
    component: SurveysComponent,
    data: [{section: SurveysSection.EXPLORE}],
  },
  {
    path: 'surveys-taken',
    component: SurveysComponent,
    data: [{section: SurveysSection.SURVEYS_TAKEN}],
   // canActivate: [AuthUserGuard]
  },
  {
    path: 'new',
    component: NewSurveyComponent,
  },
  {
    path: 'new/topics',
    component: TopicsListComponent,
    data: [{isSurveyCreation: true}],
    // canActivate: [AuthUserGuard]
  },
  {
    path: 'new/topics/:id',
    component: TopicComponent,
    data: [{isSurveyCreation: true}],
    // canActivate: [AuthUserGuard]
  },
  // {
  //   path: 'drafts',
  //   component: SurveysComponent,
  //   data: [{section: SurveysSection.DRAFTS}],
  //   // canActivate: [AuthUserGuard]
  // },
  {
    path: 'topics',
    component: TopicsListComponent,
    data: [{isSurveyCreation: false}],
    // canActivate: [AuthAdminGuard]
  },
  {
    path: 'topics/:id',
    component: TopicComponent,
    data: [{isSurveyCreation: false}],
    // canActivate: [AuthAdminGuard]
  },

  { path: '',   redirectTo: '/explore', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
