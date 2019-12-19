import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UsersService} from './users.service';
import {Observable} from 'rxjs';
import {User} from './model/user.model';
@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor(private userService: UsersService) { }

  setToken(token: string): void{
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  parseToken() {
    const jwtHelper = new JwtHelperService();
    console.log(jwtHelper.decodeToken(this.getToken()));
    return jwtHelper.decodeToken(this.getToken());
  }

  getUserEmail(): string {
    return this.parseToken()["sub"];
  }

  isUserTokenPresent() {
    if (this.getToken() == null) {
      return false;
    } else {
      return true;
    }
  }

  setLoggedUserSubject(): Observable<User> {
    const userEmail: string = this.getUserEmail();
    this.userService.getUser(userEmail).subscribe(user => {
      this.userService.loggedUserSubject.next(user);
      console.log(user);
    });
    return;
  }
}
