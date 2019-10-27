import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
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
