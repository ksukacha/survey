import { Injectable } from '@angular/core';
import {TopicModel} from '../model/topic.model';
import {TOPICS} from './mock-topics';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Survey} from '../model/survey.model';
import {SURVEYS} from '../mock-survey';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  subject: Subject<TopicModel[]> = new ReplaySubject<TopicModel[]>(1);

  constructor() {
  }

  getSubject(): Observable<TopicModel[]> {
    return this.subject.asObservable();
  }

  getTopics(): TopicModel[] {
    return TOPICS;
  }

  addTopic(t: TopicModel): void {
    this.getTopics().push(t);
    this.subject.next(this.getTopics());
  }

  getTopic(id: number | string) {
    return this.getTopics().find(topic => topic.id === +id);
  }

  getTopicsLength(): number {
    return TOPICS.length;
  }
}
