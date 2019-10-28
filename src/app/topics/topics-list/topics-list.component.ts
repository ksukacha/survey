import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../topics.service';
import {TopicModel} from '../../model/topic.model';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {
  topics: TopicModel[];
  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.getTopics();
    console.log(this.topics[0].name);
  }
  getTopics(): void {
    this.topicsService.getTopics().subscribe(topics => this.topics = topics);
  }
}
