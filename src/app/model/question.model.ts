import {AnswerModel} from './answer.model';

export class QuestionModel {
  name: string;
  questionType: string;
  answers: Array<AnswerModel>;
  constructor(name: string, questionType: string, answers: Array<AnswerModel>) {
    this.name = name;
    this.questionType = questionType;
    this.answers = answers;
  }
}
