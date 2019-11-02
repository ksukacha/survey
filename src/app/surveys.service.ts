import {Injectable} from '@angular/core';
import {Survey} from './model/survey.model';
import {SURVEYS} from './mock-survey';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  subject: Subject<Survey[]> = new ReplaySubject<Survey[]>(1);

  constructor() {
  }

  getSubject(): Observable<Survey[]> {
    return this.subject.asObservable();
  }

  getSurveys(): Survey[] {
    return SURVEYS;
  }

  addSurvey(s: Survey): void {
    this.getSurveys().push(s);
    this.subject.next(this.getSurveys());
  }

  getSurvey(id: number | string) {
    return this.getSurveys().find(survey => survey.id === +id);
  }

  getSurveysLength(): number {
    return SURVEYS.length;
  }
}
