import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicModel} from '../../model/topic.model';
import {TopicsService} from '../topics.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic: TopicModel;
  constructor(private activatedRoute: ActivatedRoute,
              private topicsService: TopicsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.topic = this.topicsService.getTopic(params.get('id'));
    });
  }

}
