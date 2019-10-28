import {TopicModel} from '../model/topic.model';
import {QuestionModel} from '../model/question.model';
import {AnswerModel} from '../model/answer.model';

const a1: Array<AnswerModel> = [
  new AnswerModel('red'),
  new AnswerModel('green'),
  new AnswerModel('blue')
];
const a2: Array<AnswerModel> = [
  new AnswerModel('cappuccino'),
  new AnswerModel('latte'),
  new AnswerModel('espresso')
];
const q1: Array<QuestionModel> = [
  new QuestionModel('Your favourite colour?', 'single-choice', a1)
];
const q2: Array<QuestionModel> = [
  new QuestionModel('Your favourite coffee?', 'single-choice', a2)
];
export const TOPICS: TopicModel[] = [
  new TopicModel(0,'Colors', q1, true),
  new TopicModel(1,'Coffee', q2, true)
];
