import { Injectable } from '@angular/core';
import { AUTH_USER, PASSWORD, USERNAME } from '../constant/constants';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    console.log('before ' + this.isUserLoggedIn());
    if (username === USERNAME && password === PASSWORD) {
      sessionStorage.setItem(AUTH_USER, username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTH_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTH_USER);
  }

}
