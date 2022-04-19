import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { Dvd } from '../models/dvd.model';
import { Food } from '../models/food';
import { Laptop } from '../models/laptop';
import { Toys } from '../models/toys';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  getBikesEndPoint = 'http://localhost:3021/bikes/';
  getDvdsEndPoint = 'http://localhost:3021/dvds/';
  getBooksEndPoint = 'http://localhost:3021/books/';
  getFoodsEndPoint = 'http://localhost:3021/foods/';
  getLaptopsEndPoint = 'http://localhost:3021/laptops/';
  getToysEndPoint = 'http://localhost:3021/toys/';

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

  mockDvds: Dvd[] = [
    {
      title: 'Avengers - Infinity War',
      mpaa_rating: 'PG-13',
      studio: 'MARVEL',
      time: 149,
      price: 18.55,
    },
    {
      title: 'Spider-Man Homecoming',
      mpaa_rating: '14 and over',
      studio: 'Sony Pictures Home Entertainment',
      time: 133,
      price: 7.23,
    },
    {
      title: 'Ant-Man',
      mpaa_rating: 'PG-13',
      studio: 'Walt Disney Video',
      time: 117,
      price: 19.98,
    },
    {
      title: 'Captain America',
      mpaa_rating: 'PG',
      studio: 'Walt Disney Video',
      time: 123,
      price: 24.88,
    },
  ];

  mockFood: Food[] = [
    {
      name: 'The Original Sandwich',
      brand: 'Oreo',
      weight: '303g',
      calories: 405,
      price: 2.85,
    },
    {
      name: 'Peanut Butter',
      brand: 'KRAFT',
      weight: '2000g',
      calories: 726,
      price: 9.39,
    },
    {
      name: 'Beef Ravioli',
      brand: 'Chef Boyardee',
      weight: '425g',
      calories: 250,
      price: 2.45,
    },
    {
      name: 'Medium Cheddar Cheese',
      brand: 'MOON CHEESE',
      weight: '57g',
      calories: 525,
      price: 5.87,
    },
  ];

  mockToys: Toys[] = [
    {
      name: 'Medical Kit',
      brand: 'Fisher-Price',
      ageGroup: '3 to 9',
      prize: 20.41,
    },
    {
      name: 'Ferry Boat',
      brand: 'Green Toys',
      ageGroup: '3 to 6',
      prize: 13.26,
    },
    {
      name: 'Rock-a-Stack',
      brand: 'Fisher-Price',
      ageGroup: '1 to 5',
      prize: 5.99,
    },
    {
      name: 'Stack Up Cups',
      brand: 'The First Years',
      ageGroup: '0 to 3',
      prize: 3.99,
    },
  ];

  mockLaptops: Laptop[] = [
    {
      product: 'ThinkPad T430s',
      brand: 'Lenovo',
      CPU: 'core i5-3320',
      memory: '8GB',
      price: 325.09,
    },
    {
      product: 'MacBook Air',
      brand: 'Apple',
      CPU: 'core i5 1.6GHz',
      memory: '4GB',
      price: 621.78,
    },
    {
      product: 'Ideapad 330',
      brand: 'Lenovo',
      CPU: 'core i3-8130U',
      memory: '4GB',
      price: 459.98,
    },
    {
      product: 'MacBook Pro',
      brand: 'Apple',
      CPU: 'core i5 2.5GHz',
      memory: '4GB',
      price: 2999.99,
    },
  ];

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      () => 'Unable to contact service; please try again later.'
    );
  }

  getBikes(city: string ):  Observable<Bike[]> {
    return this.http.get<Bike[]>(this.getBikesEndPoint +""+ city)
    .pipe(catchError(this.handleError));
  }

  getDvds(city: string ): Observable<Dvd[]> {
    return this.http.get<Dvd[]>(this.getDvdsEndPoint +""+ city)
    .pipe(catchError(this.handleError));
  }

  getFood(city: string ): Observable<Food[]> {
    return this.http.get<Food[]>(this.getFoodsEndPoint +""+ city)
    .pipe(catchError(this.handleError));
  }

  getToys(city: string ): Observable<Toys[]> {
    return this.http.get<Toys[]>(this.getToysEndPoint +""+ city)
    .pipe(catchError(this.handleError));
  }

  getLaptops(city: string ): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(this.getLaptopsEndPoint +""+ city)
    .pipe(catchError(this.handleError));
  }

  getBooks(city: string ): Observable<Book[]> {
    return this.http.get<Book[]>(this.getBooksEndPoint +""+ city)
    .pipe(catchError(this.handleError));
  }

  constructor(private http: HttpClient) {}
}
