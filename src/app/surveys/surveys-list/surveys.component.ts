import { Component, OnInit } from '@angular/core';
import {Survey} from '../../model/survey.model';
import {SurveysService} from '../../surveys.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys: Survey[];

  constructor(private surveysService: SurveysService) { }

  ngOnInit() {
    this.getSurveys();
  }

  getSurveys(): void {
    this.surveysService.getSurveys().subscribe(surveys => this.surveys = surveys);
  }

}
