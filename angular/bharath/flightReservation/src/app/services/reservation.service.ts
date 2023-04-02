import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criteria } from '../model/criteria';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  flightUrl: string = 'http://localhost:8081/flightservices/flights';
  reservationUrl: string = 'http://localhost:8081/flightservices/reservations';
  data: any;

  constructor(private _httpClient: HttpClient) {}

  public getFlights(criteria: Criteria): any {
    return this._httpClient.get(
      this.flightUrl +
        '?from=' +
        criteria.from +
        '&to=' +
        criteria.to +
        '&departureDate=' +
        criteria.departureDate
    );
  }

  public getFlight(id: number): any {
    return this._httpClient.get(this.flightUrl + '/' + id);
  }

  public saveReservation(reservation: any): any {
    return this._httpClient.post(this.reservationUrl, reservation);
  }
}
