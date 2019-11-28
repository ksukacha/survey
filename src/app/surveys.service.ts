import {Injectable} from '@angular/core';
import {Survey} from './model/survey.model';
import {Observable, of, ReplaySubject, Subject, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  subject: Subject<Survey[]> = new ReplaySubject<Survey[]>(1);

  constructor(private httpClient: HttpClient) {
  }

  getSubject(): Observable<Survey[]> {
    return this.subject.asObservable();
  }
  setSurveysForDisplay(surveys: Survey[]): void {
    this.subject.next(surveys);
  }

  getSurveys(): Subscription {
    return this.httpClient.get<Survey[]>('http://localhost:8081/api/surveys').subscribe(surveys => {
      this.subject.next(surveys);
    });
  }

  getSurvey(surveyId: string): Observable<Survey> {
    return this.httpClient.get<Survey>('http://localhost:8081/api/surveys/' + surveyId);
  }

  saveSurvey(s: Survey, userId: number, surveyStatus: string): Observable<Survey> {
    /*this.getSurveys().push(s);
    this.subject.next(this.getSurveys());*/

    // return this.httpClient.post<Survey>('http://localhost:8081/api/surveys', s);
    return this.httpClient.post<Survey>('http://localhost:8081/api/surveys/saveSurvey?userId=' + userId + '&surveyStatus=' + surveyStatus, s );
  }

  deleteSurvey(surveyId: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8081/api/surveys/' + surveyId);
  }

}
