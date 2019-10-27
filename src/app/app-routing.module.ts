import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SurveysComponent} from './surveys/surveys-list/surveys.component';
import {SurveyDetailComponent} from './surveys/survey-detail/survey-detail.component';


const routes: Routes = [
  {path: 'home', component: SurveysComponent},
  {path: 'home/:id', component: SurveyDetailComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
