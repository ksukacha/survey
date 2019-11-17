import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {TopicModel} from '../../model/topic.model';
import {TopicsService} from '../topics.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionModel} from '../../model/question.model';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic: TopicModel;
  selectedIndexes: Array<boolean> = [];
  isSurveyCreation: boolean;
  selectedQuestions: QuestionModel[] = [];
  subscriptions: Subscription[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private topicsService: TopicsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.subscriptions.push(this.topicsService.getTopic(params.get('id')).subscribe(topic => {
        this.topic = topic;
        for (const i of this.topic.questions) {
          this.selectedIndexes.push(false);
        }
      }));
    });
    this.activatedRoute.data.subscribe((isSurveyCreation: Data) => {
      this.isSurveyCreation = isSurveyCreation[0].isSurveyCreation;
    });
    this.topicsService.getSelectedQuestionsToNewSurvey().subscribe(selectedQuestions =>
      this.selectedQuestions = selectedQuestions);
  }

  addToNewSurvey(): void {
    console.log(this.selectedIndexes.length);
    for (let i = 0; i < this.selectedIndexes.length; ++i) {
      console.log(i, this.selectedIndexes[i]);
    }
    let selectedQuestionsArray: QuestionModel[] = [];
    for (let i = 0; i < this.selectedIndexes.length; ++i) {
      if (this.selectedIndexes[i]) {
        selectedQuestionsArray.push(this.topic.questions[i]);
      }
    }
    this.topicsService.addSelectedQuestions(selectedQuestionsArray);
    // this.topicsService.clearSelectedQuestions();
    this.router.navigate(['new']);
  }
  noSelectedIndexes(): boolean {
    let res = true;
    for (let i of this.selectedIndexes) {
      if (i === true) {
        res = false;
      }
    }
    return res;
  }
}
