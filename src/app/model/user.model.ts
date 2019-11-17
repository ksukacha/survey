import {Survey} from './survey.model';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  birthDate: string;
  email: string;
  pass: string;
  role: string;
  ownSurveys: Array<Survey>;
  takenSurveys: Array<Survey>;
  draftSurveys: Array<Survey>;

  constructor(id: number, firstName: string, lastName: string, login: string, birthDate: string, email: string, pass: string, role: string, ownSurveys: Array<Survey>, takenSurveys: Array<Survey>, draftSurveys: Array<Survey>) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.birthDate = birthDate;
    this.email = email;
    this.pass = pass;
    this.role = role;
    this.ownSurveys = ownSurveys;
    this.takenSurveys = takenSurveys;
    this.draftSurveys = draftSurveys;
  }
}
