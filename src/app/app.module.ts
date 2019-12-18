import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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

import {SurveysComponent} from './surveys/surveys-list/surveys.component';
import {SurveyDetailModule} from './surveys/survey-detail/survey-detail.module';
import {AppRoutingModule} from './app-routing.module';
import {NewSurveyComponent} from './surveys/new-survey/new-survey.component';
import { TopicsListComponent } from './topics/topics-list/topics-list.component';
import {TopicsService} from './topics/topics.service';
import {CurItemTypeService} from './cur-item-type.service';
import { TopicComponent } from './topics/topic/topic.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UsersService} from './users.service';
import { WelcomeComponent } from './page-parts/welcome/welcome/welcome.component';
import {TokenServiceService} from './token-service.service';
import {AuthIntercepterService} from './auth-intercepter.service';
// import {AuthUserGuard} from './authguard/auth-user.guard';
// import {AuthAdminGuard} from './authguard/auth-admin.guard';

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
   /* SurveyDetailComponent,*/
    PageNotFoundComponent,
    TopicsListComponent,
    TopicComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SurveyDetailModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [
    NgbActiveModal,
    SurveysService,
    TopicsService,
    CurItemTypeService,
    UsersService/*, AuthUserGuard, AuthAdminGuard*/,
    TokenServiceService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthIntercepterService, multi: true}
    ],
  bootstrap: [AppComponent],
  entryComponents: [ModalAboutComponent, ModalLoginComponent, ModalSignUpComponent]
})
export class AppModule { }
