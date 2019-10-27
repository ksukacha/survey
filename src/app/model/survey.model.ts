import {User} from './user.model';
import {QuestionModel} from './question.model';

export class Survey {
  id: number;
  description: string;
  elapseDate: string;
  author: User;
  questions: Array<QuestionModel>;

  constructor(id: number, description: string, elapseDate: string, author: User) {
    this.id = id;
    this.description = description;
    this.elapseDate = elapseDate;
    this.author = author;
  }
}

