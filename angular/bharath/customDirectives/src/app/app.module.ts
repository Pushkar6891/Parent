import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfDirective } from './directives/if.directive';
import { LoopDirective } from './directives/loop.directive';
import { StylesDirective } from './directives/styles.directive';

@NgModule({
  declarations: [
    AppComponent,
    IfDirective,
    LoopDirective,
    StylesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
