import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UppercaseConverterService {
  constructor(private http: HttpClient) {}

  public convertToUppercase(message: string): any {
    return this.http.post(
      'http://test-routes.herokuapp.com/test/uppercase',
      message
    );
  }
}
