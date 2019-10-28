import {AnswerModel} from './answer.model';

export class QuestionModel {
  name: string;
  ansType: string;
  answers: Array<AnswerModel>;
  constructor(name: string, ansType: string, answers: Array<AnswerModel>) {
    this.name = name;
    this.ansType = ansType;
    this.answers = answers;
  }
}
