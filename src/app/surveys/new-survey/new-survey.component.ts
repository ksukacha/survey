import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {
  choice = 'single-choice';
  answerCounter = 1;
  constructor() { }

  ngOnInit() {
  }
  radioClick() {
    this.choice = 'single-choice';
  }
  checkboxClick() {
    this.choice = 'multiple-choice';
  }
}
