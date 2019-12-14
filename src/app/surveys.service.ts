import {Injectable} from '@angular/core';
import {Survey} from './model/survey.model';
import {Observable, of, ReplaySubject, Subject, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {SurveyDto} from './model/dto/surveyDto';
import {OpenedSurveyService} from './surveys/survey-detail/opened-survey.service';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  subject: Subject<Survey[]> = new ReplaySubject<Survey[]>(1);

  constructor(private httpClient: HttpClient,
              private openedSurveyService: OpenedSurveyService) {
  }

  getSubject(): Observable<Survey[]> {
    return this.subject.asObservable();
  }

  setSurveysForDisplay(surveys: Survey[]): void {
    this.subject.next(surveys);
  }

  getSurveys(): Observable<Survey[]> {
    // return this.httpClient.get<Survey[]>('http://localhost:8081/api/surveys').subscribe(surveys => {
    //   this.subject.next(surveys);
    // });
    const observableSurveysDto: Observable<SurveyDto[]> = this.httpClient.get<SurveyDto[]>('http://localhost:8081/api/surveys/all');
    const surveys: Survey[] = [];
    observableSurveysDto.subscribe(surveysDto => {
      for (const surveyDto of surveysDto) {
        const survey: Survey = new Survey(surveyDto.id, surveyDto.name, surveyDto.description,
          surveyDto.elapseDate, surveyDto.creatorUserId, surveyDto.questions);
        console.log('getSurveys()', survey);
        surveys.push(survey);
      }
      this.subject.next(surveys);
    });
    return this.subject.asObservable(); ///////////////////////////
  }

  getSurvey(surveyId: string): Observable<Survey> {
    // return this.httpClient.get<Survey>('http://localhost:8081/api/surveys/' + surveyId);
    const observableSurveyDto: Observable<SurveyDto> = this.httpClient.get<SurveyDto>('http://localhost:8081/api/surveys/' + surveyId);
    observableSurveyDto.subscribe(surveyDto => {
      const survey: Survey = new Survey(surveyDto.id, surveyDto.name, surveyDto.description,
        surveyDto.elapseDate, surveyDto.creatorUserId, surveyDto.questions);
      console.log('getSurvey()', survey);
      this.openedSurveyService.setOpenedSurvey(survey);
    });
    return this.openedSurveyService.subject.asObservable(); ///////////////////////////
  }

  saveSurvey(s: Survey, userId: number, surveyStatus: string): Observable<Survey> {
    /*this.getSurveys().push(s);
    this.subject.next(this.getSurveys());*/

    // return this.httpClient.post<Survey>('http://localhost:8081/api/surveys', s);
    return this.httpClient.post<Survey>('http://localhost:8081/api/surveys/saveSurvey?userId=' + userId + '&surveyStatus=' + surveyStatus, s);
  }

  deleteSurvey(surveyId: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8081/api/surveys/' + surveyId);
  }

}
