import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criteria } from 'src/app/model/criteria';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css'],
})
export class FindFlightsComponent implements OnInit {
  criteria: Criteria = new Criteria('', '', '');

  constructor(private service: ReservationService, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit() {
    this.service.getFlights(this.criteria).subscribe((response: any) => {
      this.service.data = response;
      console.log(response);
      this.router.navigate(['/displayFlights']);
    });
  }
}
