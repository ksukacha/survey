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
  surveySubject: Subject<Survey> = new ReplaySubject<Survey>(1);

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
    const observableSurveysDto: Observable<SurveyDto[]> = this.httpClient.get<SurveyDto[]>('http://localhost:8081/api/surveys');
    const surveys: Survey[] = [];
    observableSurveysDto.subscribe(surveysDto => {
      for (const surveyDto of surveysDto) {
        const survey: Survey = new Survey(surveyDto.id, surveyDto.name, surveyDto.description,
          surveyDto.elapseDate, surveyDto.creatorUserId, surveyDto.questions);
        console.log('survey', survey);
        surveys.push(survey);
      }
      this.subject.next(surveys);
    });
    return this.subject.asObservable();
  }

  getSurvey(surveyId: string): Observable<Survey> {
    const observableSurveyDto: Observable<SurveyDto> = this.httpClient.get<SurveyDto>('http://localhost:8081/api/surveys/' + surveyId);
    observableSurveyDto.subscribe(surveyDto => {
      const survey: Survey = new Survey(surveyDto.id, surveyDto.name, surveyDto.description,
        surveyDto.elapseDate, surveyDto.creatorUserId, surveyDto.questions);
      console.log('getSurvey()', survey);
      this.openedSurveyService.setOpenedSurvey(survey);
    });
    return this.openedSurveyService.subject.asObservable();
  }

  saveSurvey(s: Survey, userId: number, creatorUserId: string, surveyStatus: string): Observable<Survey> {
    const surveyDto: SurveyDto = new SurveyDto(s.name, s.description, s.elapseDate, s.questions, creatorUserId, userId, surveyStatus);
    const observableSurveyDto: Observable<SurveyDto> = this.httpClient.post<SurveyDto>('http://localhost:8081/api/surveys', surveyDto);
    observableSurveyDto.subscribe(sDto => {
      const survey: Survey = new Survey(sDto.id, sDto.name, sDto.description,
        sDto.elapseDate, sDto.creatorUserId, sDto.questions);
      console.log('saveSurvey()', survey);
      this.surveySubject.next(survey);
    });
    return this.surveySubject.asObservable();
  }

  deleteSurvey(surveyId: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8081/api/surveys/' + surveyId);
  }



}
