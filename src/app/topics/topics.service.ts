import { Injectable } from '@angular/core';
import {TopicModel} from '../model/topic.model';
import {TOPICS} from './mock-topics';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor() { }
  getTopics(): Observable<TopicModel[]> {
    return of(TOPICS);
  }

  getTopic(id: number | string) {
    return this.getTopics().pipe(
      // (+) before `id` turns the string into a number
      map((topics: TopicModel[]) => topics.find(topic => topic.id === +id))
    );
  }
}
