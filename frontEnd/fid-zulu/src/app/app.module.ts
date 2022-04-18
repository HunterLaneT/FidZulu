import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { MdbFormsModule } from '@MdbFormsModule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { DVDsListComponent } from './dvds-list/dvds-list.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { LaptopsListComponent } from './laptops-list/laptops-list.component';
import { BooksListComponent } from './books-list/books-list.component';
import { ToysListComponent } from './toys-list/toys-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShowAllListsComponent } from './show-all-lists/show-all-lists.component';


@NgModule({
  declarations: [
    AppComponent,
    BikesListComponent,
    DVDsListComponent,
    FoodsListComponent,
    LaptopsListComponent,
    BooksListComponent,
    ToysListComponent,
    NavBarComponent,
    ShowAllListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
