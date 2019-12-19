import {Survey} from '../survey.model';
import {SurveyDto} from './surveyDto';

export class UserDto {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  // birthDate: string;
  email: string;
  password: string;
  role: string;
  createdSurveys: Array<SurveyDto>;
  passedSurveys: Array<SurveyDto>;

  constructor(id: number, firstName: string, lastName: string, login: string, /*birthDate: string,*/ email: string, pass: string, role: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = login;
    // this.birthDate = birthDate;
    this.email = email;
    this.password = pass;
    this.role = role;
  }
}
