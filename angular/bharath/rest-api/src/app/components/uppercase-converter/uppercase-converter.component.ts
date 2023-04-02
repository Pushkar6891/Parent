import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UppercaseConverterService } from 'src/app/services/uppercase-converter.service';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css'],
})
export class UppercaseConverterComponent implements OnInit {
  public result: any;
  public message: any;

  constructor(private uppercaseConverterService: UppercaseConverterService) {}

  ngOnInit(): void {}

  public convertToUppercase(message: any): any {
    return this.uppercaseConverterService.convertToUppercase(message).subscribe(
      (response: any) => (this.result = response),
      (httpErrorResponse: HttpErrorResponse) => {
        console.error(httpErrorResponse);
      }
    );
  }
}
