import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username = '';
  email = '';
  experience = 0;
  domain = '';

  user: User = new User("", "", 0, "");
  message: any;

  constructor(private router: Router,private service: UserRegistrationService) { }

  ngOnInit() { }

  public registerNow() {
    let resp = this.service.doRegistration(this.user);
    resp.subscribe((data) => this.message = data);
  }
  
  public redirectToSearch(){
	this.router.navigate(['search']);
  }

}
