import {AnswerModel} from './answer.model';

export class QuestionModel {
  name: string;
  qType: string;
  answers: Array<AnswerModel>;
  constructor(name: string, qType: string, answers: Array<AnswerModel>) {
    this.name = name;
    this.qType = qType;
    this.answers = answers;
  }
}
