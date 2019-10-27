import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/*import { AppRoutingModule } from './app-routing.module';*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './page-parts/header/header.component';
import { SidemenuComponent } from './page-parts/sidemenu/sidemenu.component';
import { ModalComponent } from './modal/modal.component';
import { NewComponent } from './new/new.component';
import { ModalAboutComponent } from './modals/modal-about/modal.about.component';
import { DropdownMenuComponent } from './page-parts/dropdown-menu/dropdown-menu.component';
import {SurveysService} from './surveys.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ModalSignUpComponent } from './modals/modal-sign-up/modal-sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewSurveyComponent } from './surveys/new-survey/new-survey.component';
/*import {SurveysModule} from './surveys/surveys.module';*/
/*import {NewSurveyComponent} from './new-survey/new-survey.component';*/
import {SurveysComponent} from './surveys/surveys-list/surveys.component';
import { SurveyDetailComponent } from './surveys/survey-detail/survey-detail.component';
import {SurveyDetailModule} from './surveys/survey-detail/survey-detail.module';
import {AppRoutingModule} from './app-routing.module';

/*import {SurveyQuestionTabComponent} from './surveys/survey-detail/survey-question-tab/survey-question-tab.component';
import {SurveyAnswerTabComponent} from './surveys/survey-detail/survey-answer-tab/survey-answer-tab.component';*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    ModalComponent,
    NewComponent,
    ModalAboutComponent,
    DropdownMenuComponent,
    LogInComponent,
    ModalLoginComponent,
    SignUpComponent,
    ModalSignUpComponent,
    NewSurveyComponent,
    SurveysComponent,
    SurveyDetailComponent,
    PageNotFoundComponent,
    /*SurveyQuestionTabComponent,
    SurveyAnswerTabComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SurveyDetailModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    /*SurveysModule,*/
  ],
  providers: [NgbActiveModal, SurveysService],
  bootstrap: [AppComponent],
  entryComponents: [ModalAboutComponent, ModalLoginComponent, ModalSignUpComponent]
})
export class AppModule { }
