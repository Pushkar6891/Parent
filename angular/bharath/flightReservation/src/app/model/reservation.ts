export class Reservation {

    constructor(
        public passengerFirstName:string,
        public passengerLastName:string,
        public passengerMiddleName:string,
        public passengerEmail:string,
        public passengerPhone:string,
        public cardNumber:string,
        public expirationDate:string,
        public securityCode:string,
        public flightId:string) {  }
  
  }