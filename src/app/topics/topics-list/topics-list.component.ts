import {Component, OnDestroy, OnInit} from '@angular/core';
import {TopicsService} from '../topics.service';
import {TopicModel} from '../../model/topic.model';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {CurItemTypeService} from '../../cur-item-type.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit, OnDestroy {
  curItemType: string;
  topics: TopicModel[];
  isSurveyCreation: boolean;
  subscriptions: Subscription[] = [];
  constructor(
    private topicsService: TopicsService,
    private curItemTypeService: CurItemTypeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptions.push(this.topicsService.getTopics());
    this.topicsService.getSubject().subscribe(topics => this.topics = topics);
    this.curItemTypeService.getSubject().subscribe(curItemType => this.curItemType = curItemType);
    this.activatedRoute.data.subscribe((isSurveyCreation: Data) => {
      this.isSurveyCreation = isSurveyCreation[0].isSurveyCreation;
    });
  }
  createTopic(): void {
    this.curItemTypeService.setCurrentItemType('Topic');
    this.router.navigate(['new']);
  }

  deleteTopic(id: number) {
    this.subscriptions.push(this.topicsService.deleteTopic(id).subscribe(() => {
        const index = this.topics.findIndex(t => t.id === id); // find index in your array
        this.topics.splice(index, 1); // remove element from array
      }
    ));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
