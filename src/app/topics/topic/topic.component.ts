import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicModel} from '../../model/topic.model';
import {TopicsService} from '../topics.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic: TopicModel;
  selectedIndexes: Array<boolean> = [];
  constructor(private activatedRoute: ActivatedRoute,
              private topicsService: TopicsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.topic = this.topicsService.getTopic(params.get('id'));
    });
    for (const i of this.topic.questions) {
      this.selectedIndexes.push(false);
    }
    console.log(this.selectedIndexes[0]);
  }

  addToTopic(): void {
    console.log(this.selectedIndexes.length);
    for (let i = 0; i < this.selectedIndexes.length; ++i) {
      console.log(i, this.selectedIndexes[i]);
    }
  }
}
