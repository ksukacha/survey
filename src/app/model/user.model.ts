import {Survey} from './survey.model';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  // birthDate: string;
  email: string;
  password: string;
  role: string;
  ownSurveys: Array<Survey>;
  takenSurveys: Array<Survey>;
  draftSurveys: Array<Survey>;

  constructor(firstName: string, lastName: string, login: string, /*birthDate: string,*/ email: string, pass: string, role: string/*, ownSurveys: Array<Survey>, takenSurveys: Array<Survey>, draftSurveys: Array<Survey>*/) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = login;
   // this.birthDate = birthDate;
    this.email = email;
    this.password = pass;
    this.role = role;
    // this.ownSurveys = ownSurveys;
    // this.takenSurveys = takenSurveys;
    // this.draftSurveys = draftSurveys;
  }
}
