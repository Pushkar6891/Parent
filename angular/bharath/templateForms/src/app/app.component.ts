import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'templateForms';

  // Two way binding
  public firstName: string = 'Default firstName';
  public lastName: string = 'Default lastName';
  public email: string = '';
  public gender: string = '';
  public street: string = '';
  public city: string = '';
  public country: string = '';

  public onSubmit(data: any) {
    console.log(data);
  }
}
