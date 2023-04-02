import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AUTH_TOKEN, AUTH_USER, URL_BASIC_AUTH } from '../constant/constants';
import { AuthenticationBean } from '../model/AuthenticationBean';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeBasicAuthenticationService(username: string, password: string) {

    let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      'Authorization': basicAuthenticationHeaderString,
      'Access-Control-Allow-Origin': '*'
    });
    return this.httpClient.get<AuthenticationBean>(URL_BASIC_AUTH, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTH_USER, username);
          sessionStorage.setItem(AUTH_TOKEN, basicAuthenticationHeaderString);
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
