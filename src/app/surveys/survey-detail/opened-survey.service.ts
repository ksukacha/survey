import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {Survey} from '../../model/survey.model';

@Injectable({
  providedIn: 'root'
})
export class OpenedSurveyService {
  subject: Subject<Survey> = new ReplaySubject(1);
  constructor() { }
  setOpenedSurvey(openedSurvey: Survey) {
    this.subject.next(openedSurvey);
    console.log("opened-survey-by.bsu.famcs.kachytskaya.service", openedSurvey.id);
  }
  getSubject(): Observable<Survey> {
    return this.subject.asObservable();
  }
}
