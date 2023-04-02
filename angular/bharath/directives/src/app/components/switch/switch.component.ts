import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent implements OnInit {
  myCase: number = 0;

  constructor() {
    this.myCase = 4;
  }

  ngOnInit(): void {}
}
