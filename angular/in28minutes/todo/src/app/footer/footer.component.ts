import { Component, OnInit } from '@angular/core';
import { AUTHOR } from '../constant/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  author = AUTHOR;
  currentYear = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
