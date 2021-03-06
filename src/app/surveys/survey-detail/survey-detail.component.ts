import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Survey} from '../../model/survey.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {SurveysService} from '../../surveys.service';
import {map, switchMap, take} from 'rxjs/operators';
import {OpenedSurveyService} from './opened-survey.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetailComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private surveysService: SurveysService,
    private openedSurveyService: OpenedSurveyService,
    private router: Router
  ) {
  }

  ngOnInit() {
    /* this.survey = this.route.paramMap.pipe(
       map((params: ParamMap) =>
         this.surveysService.getSurvey(params.get('id')))
     );*/
    console.log('survey-detail.component oninit');
    if (window.location.href.includes("/surveys/")) {
      this.subscriptions.push(this.route.paramMap.pipe(take(1)).subscribe(params => {
        this.subscriptions.push(this.surveysService.getSurvey(params.get('id')).subscribe(survey => {
          // this.openedSurveyService.setOpenedSurvey(survey);
          console.log('survey-detail-component', survey.id);
          this.router.navigate(['surveys/' + params.get('id') + '/questions']);
        }));
      }));
    }
  }

  goBack(): void {
    this.router.navigate(['explore']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
