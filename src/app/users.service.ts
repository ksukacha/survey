import {Injectable} from '@angular/core';
import {Survey} from './model/survey.model';
import {Observable, of, ReplaySubject, Subject, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {User} from './model/user.model';
import {LoginRequest} from './model/loginRequest.model';
import {LoginResponse} from './model/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private loggedUserSubject: Subject<User> = new ReplaySubject(1);
  // private userLogged: boolean = false;
  // private adminLogged: boolean = false;
   constructor(private httpClient: HttpClient) {
  }
  //
  // getLoggedUserSubject(): Observable<User> {
  //   return this.loggedUserSubject.asObservable();
  // }
  // setLoggedUser(user: User): void {
  //   this.loggedUserSubject.next(user);
  //   if (user.role === 'USER') {
  //     this.userLogged = true;
  //   } else if (user.role === 'ADMIN') {
  //     this.adminLogged = true;
  //   }
  // }
  // logOut(): void {
  //   this.loggedUserSubject.next(null);
  //   this.userLogged = false;
  //   this.adminLogged = false;
  // }
  // isUserLogged() {
  //   return this.userLogged;
  // }
  // isAdminLogged() {
  //   return this.adminLogged;
  // }
  getUser(userEmail: string): Observable<User> {
    return this.httpClient.get<User>('http://localhost:8081/api/users/' + userEmail);
  }

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8081/api/users', user);
  }
  loginUser(loginRequest: LoginRequest): Observable<LoginResponse> {
     return this.httpClient.post<LoginResponse>('http://localhost:8081/api/login', loginRequest);
  }

  // deleteUser(userId: number): Observable<void> {
  //   return this.httpClient.delete<void>('http://localhost:8081/api/users/' + userId);
  // }
  updateUser(user: User, id: number): Observable<Object> {
    return this.httpClient.put('http://localhost:8081/api/users/' + id, user);
  }

}
