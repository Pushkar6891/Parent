import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(private http: HttpClient) {}

  public getHelloService(): Observable<any> {
    return this.http.get('http://test-routes.herokuapp.com/test/hello');
  }
}
