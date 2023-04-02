import { Injectable } from '@angular/core';
import { PASSWORD, USERNAME } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username === USERNAME && password === PASSWORD) {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
