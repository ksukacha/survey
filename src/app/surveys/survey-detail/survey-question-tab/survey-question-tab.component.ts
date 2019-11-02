import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-survey-question-tab',
  templateUrl: './survey-question-tab.component.html',
  styleUrls: ['./survey-question-tab.component.css']
})
export class SurveyQuestionTabComponent implements OnInit {
private id;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    console.log(this.id);
  }

}
