import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    public router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {

  }

  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout();
  }

}
