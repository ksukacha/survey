import { Injectable } from '@angular/core';
import {TopicModel} from '../model/topic.model';
import {Observable, of, ReplaySubject, Subject, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Survey} from '../model/survey.model';
import {QuestionModel} from '../model/question.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  subject: Subject<TopicModel[]> = new ReplaySubject<TopicModel[]>(1);
  selectedQuestionsToNewSurvey: Subject<QuestionModel[]> = new ReplaySubject<QuestionModel[]>(1);
  selectedQuestions: QuestionModel[] = [];
  constructor(private httpClient: HttpClient) {
  }

  getSubject(): Observable<TopicModel[]> {
    return this.subject.asObservable();
  }

  getTopics(): Subscription {
    return this.httpClient.get<TopicModel[]>('http://localhost:8081/api/topics').subscribe(topics => {
      this.subject.next(topics);
    });
  }

  getTopic(topicId: string): Observable<TopicModel> {
    return this.httpClient.get<TopicModel>('http://localhost:8081/api/topics/' + topicId);
  }

  saveTopic(t: TopicModel): Observable<TopicModel> {
    /*this.getSurveys().push(s);
    this.subject.next(this.getSurveys());*/
    return this.httpClient.post<TopicModel>('http://localhost:8081/api/topics', t);
  }

  deleteTopic(topicId: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8081/api/topics/' + topicId);
  }

  getSelectedQuestionsToNewSurvey(): Observable<QuestionModel[]> {
    return this.selectedQuestionsToNewSurvey.asObservable();
  }
  addSelectedQuestions(selectedQuestions: QuestionModel[]): void {
    this.selectedQuestionsToNewSurvey.next(selectedQuestions);
  }
}
