import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = 'Invalid Credentials';
  isInvalidLogin: boolean = false;
  username: string = 'pushkar';
  password: string = 'pushkar';

  constructor(
    public router: Router,
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {

  }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log(this.username);
    console.log(this.password);

    if (this.username === 'pushkar' && this.password === 'pushkar') {
      this.isInvalidLogin = false;
      this.router.navigate(['dashboard', this.username]);
    } else {
      this.isInvalidLogin = true;
    }
  }

  handleLoginUsingHardcodedAuthenticationService() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.isInvalidLogin = false;
      this.router.navigate(['dashboard', this.username]);
    } else {
      this.isInvalidLogin = true;
    }
  }


}
