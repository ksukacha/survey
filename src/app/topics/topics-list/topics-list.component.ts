import { Component, OnInit } from '@angular/core';
import {TopicsService} from '../topics.service';
import {TopicModel} from '../../model/topic.model';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {CurItemTypeService} from '../../cur-item-type.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {
  curItemType: string;
  topics: TopicModel[];
  isSurveyCreation: boolean;
  constructor(
    private topicsService: TopicsService,
    private curItemTypeService: CurItemTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.topics = this.topicsService.getTopics();
    this.curItemTypeService.getSubject().subscribe(curItemType => this.curItemType = curItemType);
    this.activatedRoute.data.subscribe((isSurveyCreation: Data) => {
      this.isSurveyCreation = isSurveyCreation[0].isSurveyCreation;
    });
  }
  createTopic(): void {
    this.curItemTypeService.setCurrentItemType('Topic');
    this.router.navigate(['new']);
  }
}
