import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BryntumSchedulerModule } from '@bryntum/scheduler-angular';
 
import { View1Component } from './Components/view1/view1.component';



@NgModule({
  declarations: [
    AppComponent,
    View1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BryntumSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
