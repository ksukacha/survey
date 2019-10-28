import {User} from './user.model';
import {QuestionModel} from './question.model';

export class Survey {
  id: number;
  name: string;
  description: string;
  elapseDate: string;
  author: User;
  questions: Array<QuestionModel>;

  constructor(id: number, name: string, description: string, elapseDate: string, author: User, questions: Array<QuestionModel>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.elapseDate = elapseDate;
    this.author = author;
    this.questions = questions;
  }
}

