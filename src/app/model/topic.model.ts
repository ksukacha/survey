import {QuestionModel} from './question.model';

export class TopicModel {
  id: number;
  name: string;
  questions: Array<QuestionModel>;
  shared: boolean;
  constructor(id: number, name: string, questions: Array<QuestionModel>, shared: boolean) {
    this.id = id;
    this.name = name;
    this.questions = questions;
    this.shared = shared;
  }
}
