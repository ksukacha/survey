import { Injectable } from '@angular/core';
import {TopicModel} from '../model/topic.model';
import {TOPICS} from './mock-topics';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Survey} from '../model/survey.model';
import {SURVEYS} from '../mock-survey';
import {QuestionModel} from '../model/question.model';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  subject: Subject<TopicModel[]> = new ReplaySubject<TopicModel[]>(1);
  selectedQuestionsToNewSurvey: Subject<QuestionModel[]> = new ReplaySubject<QuestionModel[]>(1);
  selectedQuestions: QuestionModel[] = [];
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
  getSelectedQuestionsToNewSurvey(): Observable<QuestionModel[]> {
    return this.selectedQuestionsToNewSurvey.asObservable();
  }
  addSelectedQuestions(selectedQuestions: QuestionModel[]): void {
    this.selectedQuestionsToNewSurvey.next(selectedQuestions);
  }
  clearSelectedQuestions() {
    this.selectedQuestions = [];
  }
}
