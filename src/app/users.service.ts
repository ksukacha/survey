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
   constructor(private httpClient: HttpClient) {
  }
  getUser(userEmail: string): Observable<User> {
    return this.httpClient.get<User>('http://localhost:8081/api/users/' + userEmail);
  }

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8081/api/users', user);
  }
  loginUser(loginRequest: LoginRequest): Observable<LoginResponse> {
     return this.httpClient.post<LoginResponse>('http://localhost:8081/api/login', loginRequest);
  }
  updateUser(user: User, id: number): Observable<User> {
    return this.httpClient.put<User>('http://localhost:8081/api/users/' + id, user);
  }

}
