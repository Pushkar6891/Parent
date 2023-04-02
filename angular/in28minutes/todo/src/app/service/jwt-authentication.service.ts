import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTH_TOKEN, AUTH_USER, URL_JWT_AUTH } from '../constant/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthenticationService(username: string, password: string) {
    return this.http.post<any>(URL_JWT_AUTH, { username, password }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTH_USER, username);
          const tokenStr = 'Bearer ' + data.token;
          sessionStorage.setItem('token', tokenStr);
          return data;
        }
      )

    );
  }

  getAuthenticatedUser(): any {
    return sessionStorage.getItem(AUTH_USER);
  }

  getAuthenticatedToken(): any {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(AUTH_TOKEN);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTH_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTH_USER);
    sessionStorage.removeItem(AUTH_TOKEN);
  }

}
