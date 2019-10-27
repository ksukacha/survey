export class User {
  id: number;
  firstName: string;
  lastName: string;
  login: string;
  birthDate: string;
  email: string;
  pass: string;

  constructor(id: number, firstName: string, lastName: string, login: string, birthDate: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.birthDate = birthDate;
    this.email = email;
  }
}
