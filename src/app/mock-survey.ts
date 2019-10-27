import {Survey} from './model/survey.model';
import {User} from './model/user.model';

export const SURVEYS: Survey[] = [
  new Survey(0, 'survey about animals', '27.10', new User(0, 'john', 'reed', 'john1994', '19.04.1994', 'john@gmail.com')),
  new Survey(1, 'survey about cinema', '15.11', new User(0, 'john', 'reed', 'john1994', '19.04.1994', 'john@gmail.com')),
  new Survey(2, 'survey about school', '06.12', new User(0, 'john', 'reed', 'john1994', '19.04.1994', 'john@gmail.com'))
];
