import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { Dvd } from '../models/dvd.model';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  mockBikes: Bike[] = [
    {
      name: 'Mamba Sport 12" Balance Bike',
      brand: 'Mamba Bikes',
      color: 'black',
      price: 75.88,
    },
    {
      name: 'DJ Fat Bike 500W',
      brand: 'DJ Bikes',
      color: 'grey',
      price: 1599.86,
    },
    {
      name: 'Kobe Aluminum Balance',
      brand: 'Kobe',
      color: 'blue',
      price: 88.56,
    },
    {
      name: "Pomona Men's Cruiser Bike",
      brand: 'Northwoods',
      color: 'silver',
      price: 221.36,
    },
  ];

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

  mockFood: Food[] = 
  [
    {
      "name": "The Original Sandwich",
      "brand": "Oreo",
      "weight": "303g",
      "calories": 405,
      "price": 2.85
    },
    {
      "name": "Peanut Butter",
      "brand": "KRAFT",
      "weight": "2000g",
      "calories": 726,
      "price": 9.39
    },
    {
      "name": "Beef Ravioli",
      "brand": "Chef Boyardee",
      "weight": "425g",
      "calories": 250,
      "price": 2.45
    },
    {
      "name": "Medium Cheddar Cheese",
      "brand": "MOON CHEESE",
      "weight": "57g",
      "calories": 525,
      "price": 5.87
    }
  ];

  // getStocks() : Observable<Stock[]>  {
  //   return this.http.get<Stock[]>(this.url).pipe(catchError(this.handleError));
  // }

  getBikes(): Bike[] {
    return this.mockBikes;
  }

  getDvds(): Dvd[] {
    return this.mockDvds;
  }
  
  getFood() : Food[] {
    return this.mockFood 
  }

  constructor() { }
}
