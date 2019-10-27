import {QuestionModel} from './question.model';

export class TopicModel {
  questions: Array<QuestionModel>;
  shared: boolean;
}
