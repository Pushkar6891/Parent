import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';
import { UppercaseConverterService } from './services/uppercase-converter.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultipleComponent } from './components/multiple/multiple.component';
import { HelloService } from './services/hello.service';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UppercaseConverterComponent,
    MultipleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    UppercaseConverterService,
    HelloService,
    CustomerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
