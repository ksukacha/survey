import { Component, OnInit } from '@angular/core';
import {Survey} from '../../model/survey.model';
import {SurveysService} from '../../surveys.service';
import {SurveysSection} from '../surveys-section';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys: Survey[];
  currentSurveysSection: SurveysSection;

  constructor(private surveysService: SurveysService) { }

  ngOnInit() {
    this.getSurveys();
  }

  getSurveys(): void {
    this.surveysService.getSurveys().subscribe(surveys => this.surveys = surveys);
  }

}
