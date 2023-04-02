import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_NAME } from 'src/app/constant/constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:string = '';
  appName:string = APP_NAME;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void { 
    this.username = this.activatedRoute.snapshot.params['username'];
  }

}
