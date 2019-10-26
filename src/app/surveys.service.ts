import { Injectable } from '@angular/core';
import {Survey} from './model/survey.model';
import {SURVEYS} from './mock-survey';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  constructor() { }
  getSurveys(): Observable<Survey[]> {
    return of(SURVEYS);
  }
}
