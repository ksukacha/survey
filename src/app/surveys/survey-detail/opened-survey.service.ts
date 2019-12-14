import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject, Subscription} from 'rxjs';
import {Survey} from '../../model/survey.model';

@Injectable({
  providedIn: 'root'
})
export class OpenedSurveyService {
  subject: Subject<Survey> = new ReplaySubject(1);
  constructor() { }
  setOpenedSurvey(openedSurvey: Survey): void {
    console.log("opened-survey-service: opened survey ", openedSurvey.id);
    this.subject.next(openedSurvey);
  }
  getSubject(): Observable<Survey> {
    return this.subject.asObservable();
  }
}
