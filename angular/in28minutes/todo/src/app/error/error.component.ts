import { Component, OnInit } from '@angular/core';
import { ERROR_MESSAGE } from '../constant/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage: string = ERROR_MESSAGE;
  
  constructor() { }

  ngOnInit(): void {
  }

}
