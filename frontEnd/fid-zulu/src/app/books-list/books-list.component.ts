import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['../app.component.css']
})
export class BooksListComponent implements OnInit {

  mockBooks: Book[] = [
    {
      "title": "Lord of the Rings",
      "author": "J.R.R Tolkien",
      "price": 25.99,
      "isbn": "9780261102385",
      "publisher": "HarperCollins"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R Tolkien",
      "price": 9.88,
      "isbn": "0261102214",
      "publisher": "HarperCollins"
    },
    {
      "title": "Lord of Souls",
      "author": "Greg Keyes",
      "price": 12.98,
      "isbn": "0345508025",
      "publisher": "Del Rey"
    },
    {
      "title": "Chronicles of Narnia",
      "author": "C. S. Lewis",
      "price": 41.77,
      "isbn": "0064471195",
      "publisher": "HarperCollins"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
