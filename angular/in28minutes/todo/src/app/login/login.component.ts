import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PASSWORD, USERNAME } from '../constant/constants';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;
  username: string = USERNAME;
  password: string = PASSWORD;
  errorMessage: string = 'Invalid Credentials!';

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService,
    private jwtAuthenticationService: JwtAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  handleLoginHardcodedAuthenticationService(): void {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

  handleLoginBasicAuthenticationService(): void {
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }
    );
  }

  handleLoginJwtAuthenticationService(): void {
    this.jwtAuthenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error => {
        console.log(error)
        this.invalidLogin = true;
      }
    );
  }

}
