import { Component, OnInit } from '@angular/core';
import { ERROR_MESSAGE } from 'src/app/constant/constant';

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
