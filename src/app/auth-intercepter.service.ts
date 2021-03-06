import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenServiceService} from './token-service.service';

@Injectable({
  providedIn: 'root'
})

// service will check if the session has a token in local storage,
// then it will update the headers of all outgoing HTTP requests.
export class AuthIntercepterService implements HttpInterceptor {

  constructor(private tokenService: TokenServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}
