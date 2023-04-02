import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactiveFormsOrModelDrivenForms';

  public personForm!: FormGroup;
  public countries: string[] = [];

  ngOnInit() {
    this.countries = ['India', 'USA', 'Canada'];

    this.personForm = new FormGroup({
      firstName: new FormControl('Default firstName', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
      }),
      gender: new FormControl(),
    });
  }

  public onSubmit() {
    //console.log(this.personForm.value);
    console.log(this.personForm.valid);
  }
}
