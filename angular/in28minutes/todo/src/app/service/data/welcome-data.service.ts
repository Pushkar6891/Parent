import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_HELLO_BEAN, URL_HELLO_BEAN_WITH_PATH_VARIABLE } from 'src/app/constant/constants';
import { HelloBean } from 'src/app/model/HelloBean';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloBeanService() {
    return this.httpClient.get<HelloBean>(URL_HELLO_BEAN);
  }

  executeHelloBeanServiceWithPathVariable(username: string) {
    return this.httpClient.get<HelloBean>(URL_HELLO_BEAN_WITH_PATH_VARIABLE + `${username}`);
  }

  /*
  createBasicAuthenticationHttpHeader() {
    let username = USERNAME;
    let password = PASSWORD;
    let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ":" + password);
    return basicAuthenticationHeaderString;
  }
  */
}
