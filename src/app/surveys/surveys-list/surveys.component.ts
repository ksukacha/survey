import {Component, OnInit} from '@angular/core';
import {Survey} from '../../model/survey.model';
import {SurveysService} from '../../surveys.service';
import {SurveysSection} from '../surveys-section';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Data} from '@angular/router';
import 'rxjs/add/operator/map';
import {UsersService} from '../../users.service';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys: Survey[];
  currentSurveysSection: SurveysSection;
  loggedUser: User;
  private subscriptions: Subscription[] = [];
  constructor(private surveysService: SurveysService,
              private activatedRoute: ActivatedRoute,
              private usersService: UsersService) { }

  ngOnInit() {
    // this.surveys = this.surveysService.getSurveys();
    this.usersService.getLoggedUserSubject().subscribe(user => {
      this.loggedUser = user;
    });
    this.activatedRoute.data.subscribe((currentSurveysSection: Data) => {
      this.currentSurveysSection = currentSurveysSection[0].section;
      console.log(this.currentSurveysSection);
      if (this.currentSurveysSection === SurveysSection.EXPLORE) {
        this.surveysService.getSurveys(); // inside there's subject.next(surveys) which allows to display all surveys from backend
      }
      if (this.currentSurveysSection === SurveysSection.MY_SURVEYS) {
        this.surveysService.setSurveysForDisplay(this.loggedUser.ownSurveys);
      } else if (this.currentSurveysSection === SurveysSection.SURVEYS_TAKEN) {
        this.surveysService.setSurveysForDisplay(this.loggedUser.takenSurveys);
      } else if (this.currentSurveysSection === SurveysSection.DRAFTS) {
        this.surveysService.setSurveysForDisplay(this.loggedUser.draftSurveys);
      }
    });
    this.surveysService.getSubject().subscribe(surveys => this.surveys = surveys);
  }
  convertTimestampToLocaleString(timestamp: number): string {
    const date: Date = new Date(timestamp);
    const options = { month: 'long', day: 'numeric' };
    return date.toLocaleString('en-GB', options);
  }
  deleteSurvey(id: number) {
    /* this.subscriptions.push(this.surveysService.deleteSurvey(id).subscribe(() => {
      }
    )); */
    const index = this.surveys.findIndex(s => s.id === id); // find index in your array
    this.surveys.splice(index, 1); // remove element from array
    if (this.currentSurveysSection === SurveysSection.MY_SURVEYS) {
      this.loggedUser.ownSurveys = this.surveys;
      this.subscriptions.push(this.usersService.updateUser(this.loggedUser, this.loggedUser.id).subscribe());
      this.subscriptions.push(this.surveysService.deleteSurvey(id).subscribe());
    } else if (this.currentSurveysSection === SurveysSection.DRAFTS) {
      this.loggedUser.draftSurveys = this.surveys;
      this.subscriptions.push(this.usersService.updateUser(this.loggedUser, this.loggedUser.id).subscribe());
    } else if (this.currentSurveysSection === SurveysSection.SURVEYS_TAKEN) {
      this.loggedUser.takenSurveys = this.surveys;
      this.subscriptions.push(this.usersService.updateUser(this.loggedUser, this.loggedUser.id).subscribe());
    }
  }

}
