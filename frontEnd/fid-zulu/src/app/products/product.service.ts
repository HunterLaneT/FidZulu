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
  getFoodsEndPoint = 'http://localhost:3021/food/';
  getLaptopsEndPoint = 'http://localhost:3021/laptops/';
  getToysEndPoint = 'http://localhost:3021/toys/';



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
