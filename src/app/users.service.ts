import {Injectable} from '@angular/core';
import {Survey} from './model/survey.model';
import {Observable, of, ReplaySubject, Subject, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {User} from './model/user.model';
import {LoginRequest} from './model/loginRequest.model';
import {LoginResponse} from './model/loginResponse';
import {UserDto} from './model/dto/userDto';
import {SurveyDto} from './model/dto/surveyDto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  loggedUserSubject: Subject<User> = new ReplaySubject(1);

  constructor(private httpClient: HttpClient) {
  }

  getUser(userEmail: string): Observable<User> {
    const userSubject: Subject<User> = new ReplaySubject(1);
    const observableUserDto: Observable<UserDto> = this.httpClient.get<UserDto>('http://localhost:8081/api/users/' + userEmail);
    observableUserDto.subscribe(userDto => {
      const user: User = new User(userDto.id, userDto.firstName, userDto.lastName, userDto.userName, userDto.email,
        userDto.password, userDto.role);
      const createdSurveysDto: SurveyDto[] = userDto.createdSurveys;
      const passedSurveysDto: SurveyDto[] = userDto.passedSurveys;

      const createdSurveys: Survey[] = [];
      const passedSurveys: Survey[] = [];

      createdSurveysDto.forEach(surveyDto => {
        createdSurveys.push(new Survey(surveyDto.id, surveyDto.name, surveyDto.description,
          surveyDto.elapseDate, surveyDto.creatorUserId, surveyDto.questions));
      });
      passedSurveysDto.forEach(surveyDto => {
        passedSurveys.push(new Survey(surveyDto.id, surveyDto.name, surveyDto.description,
          surveyDto.elapseDate, surveyDto.creatorUserId, surveyDto.questions));
      });

      user.createdSurveys = createdSurveys;
      user.passedSurveys = passedSurveys;
      userSubject.next(user);
    });
    return userSubject.asObservable();
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
