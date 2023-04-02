import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  noOfBags: any = '';
  data: any = '';
  checkInResponse: any = '';

  constructor(private router: Router, private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    var id = 11;
    this.service.getReservation(id).subscribe((response: any) => {
      this.data = response;
    })
  }

  checkin(noOfBags: any) {
    var checkInRequest: any = new Object();
    checkInRequest.id = this.data.id;
    checkInRequest.checkedIn = true;
    checkInRequest.numberOfBags = noOfBags;
    this.service.checkin(checkInRequest).subscribe((response: any) => {
      this.checkInResponse = response;
    })
    this.router.navigate(['/confirm']);

  }

}