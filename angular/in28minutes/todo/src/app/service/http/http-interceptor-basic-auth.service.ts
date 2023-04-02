import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let username = this.basicAuthenticationService.getAuthenticatedUser();
    let token = this.basicAuthenticationService.getAuthenticatedToken();

    if (username && token) {
      request = request.clone({
        setHeaders: {
          'Authorization': token,
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
    return next.handle(request);
  }
}
