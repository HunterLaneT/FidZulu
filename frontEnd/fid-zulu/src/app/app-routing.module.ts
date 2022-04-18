import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BooksListComponent } from './books-list/books-list.component';
import { DVDsListComponent } from './dvds-list/dvds-list.component';
import { FoodsListComponent } from './foods-list/foods-list.component';
import { LaptopsListComponent } from './laptops-list/laptops-list.component';
import { ShowAllListsComponent } from './show-all-lists/show-all-lists.component';
import { ToysListComponent } from './toys-list/toys-list.component';

const routes: Routes = [
  {
    path: "",
   component: ShowAllListsComponent
  },
  {
    path: "toys",
    component: ToysListComponent
  },
  {
    path: "bikes",
    component: BikesListComponent
  },
  {
    path: "laptops",
    component: LaptopsListComponent
  },
  {
    path: "dvds",
    component: DVDsListComponent
  },
  {
    path: "books",
    component: BooksListComponent
  }, 
  {
    path: "foods",
    component: FoodsListComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
