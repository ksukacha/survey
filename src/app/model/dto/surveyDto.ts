import {QuestionModel} from '../question.model';

export class SurveyDto {
  id: number;
  name: string;
  description: string;
  elapseDate: number;
  questions: Array<QuestionModel>;
  creatorUserId: string;
  userId: number;
  surveyStatus: string;
  constructor(name: string, description: string, elapseDate: number, questions: Array<QuestionModel>, creatorUserId: string, userId: number, surveyStatus: string) {
    this.name = name;
    this.description = description;
    this.elapseDate = elapseDate;
    this.questions = questions;
    this.creatorUserId = creatorUserId;
    this.userId = userId;
    this.surveyStatus = surveyStatus;
  }
}
