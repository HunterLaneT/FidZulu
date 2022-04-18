import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { ToysListComponent } from './toys-list/toys-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BikesListComponent,
    ToysListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
