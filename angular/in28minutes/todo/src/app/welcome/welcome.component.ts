import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username = '';
  welcomeMessageFromService = '';
  welcomeMessageFromServiceWithPathVariable = '';

  constructor(
    private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromServiceWithPathVariable = response.message;
    //  console.log(response);
    //  console.log(response.message);
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromServiceWithPathVariable = error.message;
    //  console.log(error);
    //  console.log(error.error.message);
  }

  getWelcomeMessageWithPathVariable() {
    this.welcomeDataService.executeHelloBeanServiceWithPathVariable(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

}
