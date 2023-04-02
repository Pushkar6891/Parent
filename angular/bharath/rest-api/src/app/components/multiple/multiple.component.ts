import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css'],
})
export class MultipleComponent implements OnInit {
  public helloResponse: any;
  public customerResponse: any;

  constructor(
    private helloService: HelloService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {

    forkJoin([
      this.helloService.getHelloService(),
      this.customerService.getCustomers()
    ]).subscribe((response: any) => {
      this.helloResponse = response[0];
      this.customerResponse = response[1];
    });
  
    /*
    this.helloService.getHelloService().subscribe((response: any) => {
      this.helloResponse = response;
    });

    this.customerService.getCustomers().subscribe((response: any) => {
      this.customerResponse = response;
    });
    */
  }
}
