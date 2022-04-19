import { Component, OnInit } from '@angular/core';
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

  getBooks(){
    this.productService.getBooks()
            .subscribe(data => this.books = data);
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getBooks();
  }

}
