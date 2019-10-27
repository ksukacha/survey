import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Survey} from '../../model/survey.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {SurveysService} from '../../surveys.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.css']
})
export class SurveyDetailComponent implements OnInit {
  survey: Observable<Survey>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private surveysService: SurveysService
  ) {}

  ngOnInit() {
    this.survey = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.surveysService.getSurvey(params.get('id')))
    );
  }
  goHome(): void {
    this.router.navigate(['home']);
  }
}
