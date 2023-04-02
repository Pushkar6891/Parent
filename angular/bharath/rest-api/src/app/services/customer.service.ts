import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  public getCustomers(): any {
    return this.http.get('https://www.w3schools.com/angular/customers.php');
  }
}
