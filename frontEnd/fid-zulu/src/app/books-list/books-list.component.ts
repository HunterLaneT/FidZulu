import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['../app.component.css']
})
export class BooksListComponent implements OnInit {

  errorMessage: string = "";

  books: Book[] = []

  city: string = "";
  getBooks() {
    this.productService.getBooks(this.city)
    .subscribe({
      next : (data) => {
        this.books = data;
        this.errorMessage = '';
      },
        error: (e) => this.errorMessage = e
      });
  }

  constructor(private productService: ProductService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.city = params['city'];
    }); 

    if(this.city == null){
      this.city = "Durham";
    }

    this.getBooks();
  }

}
