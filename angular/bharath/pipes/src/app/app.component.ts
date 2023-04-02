import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pushkar chauhan';
  myDate: Date = new Date();
  myCurrency: number = 1000;
  myJson = { name: 'Pushkar', score: 90 };
  myNumber = 1000.3142;
  stock: number = 3.56666;
  myNumbers: number[] = [10, 20, 30, 40, 50, 60];

  promiseResponse1: any;
  promiseResponse2: Promise<any>;

  constructor() {
    this.getPromise1().then((response) => (this.promiseResponse1 = response));
    this.promiseResponse2 = this.getPromise2();
  }

  getPromise1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise Response 1'), 2000);
    });
  }

  getPromise2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise Response 2'), 2000);
    });
  }
}
