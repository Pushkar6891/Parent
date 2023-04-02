import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css'],
})
export class IfComponent implements OnInit {
  displayMessage1: boolean = true;
  message1: string = '';
  message2: string = '';
  message3: string = '';
  message4: string = '';
  name: string = '';

  pi: number = 0;
  e: number = 0;

  constructor() {
    this.pi = 3.14;
    this.e = 2.718;

    this.message1 = 'You are the creator of your destiny';
    this.message2 = 'Conditional Logic';
    this.name = 'Pushkar';
    this.message3 = 'Welcome ' + this.name;
    this.message4 = 'From function : showDisplayMessage()';
  }

  public showDisplayMessage(): boolean {
    return true;
  }

  ngOnInit(): void {}
}
