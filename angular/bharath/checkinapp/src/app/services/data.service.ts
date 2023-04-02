import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getReservation(id: number): any {
    return this.http.get('http://localhost:8080/flightreservation/reservations/11')
      .pipe(map(response => {
        return response;
      },
        (error: any) => {
          console.error(error);
        }
      ))
  }

  public checkin(checkInRequest: any): any {
    return this.http.post('http://localhost:8080/flightreservation/reservations/', checkInRequest)
      .pipe(map(response => {
        return response;
      },
        (error: any) => {
          console.error(error);
        }
      ))
  }

}
