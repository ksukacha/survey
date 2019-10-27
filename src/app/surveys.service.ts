import { Injectable } from '@angular/core';
import {Survey} from './model/survey.model';
import {SURVEYS} from './mock-survey';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  constructor() { }
  getSurveys(): Observable<Survey[]> {
    return of(SURVEYS);
  }

  getSurvey(id: number | string) {
    return this.getSurveys().pipe(
      // (+) before `id` turns the string into a number
      map((surveys: Survey[]) => surveys.find(hero => hero.id === +id))
    );
  }
}
