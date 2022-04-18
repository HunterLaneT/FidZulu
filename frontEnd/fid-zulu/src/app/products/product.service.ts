import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { Dvd } from '../models/dvd.model';
import { Food } from '../models/food';
import { Laptop } from '../models/laptop';
import { Toys } from '../models/toys';

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

  mockToys : Toys[] = [
    {
      "name": "Medical Kit",
      "brand": "Fisher-Price",
      "ageGroup": "3 to 9",
      "prize": 20.41
    },
    {
      "name": "Ferry Boat",
      "brand": "Green Toys",
      "ageGroup": "3 to 6",
      "prize": 13.26
    },
    {
      "name": "Rock-a-Stack",
      "brand": "Fisher-Price",
      "ageGroup": "1 to 5",
      "prize": 5.99
    },
    {
      "name": "Stack Up Cups",
      "brand": "The First Years",
      "ageGroup": "0 to 3",
      "prize": 3.99
    }
  ]

  mockLaptops: Laptop[] = [
    {
      "product": "ThinkPad T430s",
      "brand": "Lenovo",
      "CPU": "core i5-3320",
      "memory": "8GB",
      "price": 325.09
    },
    {
      "product": "MacBook Air",
      "brand": "Apple",
      "CPU": "core i5 1.6GHz",
      "memory": "4GB",
      "price": 621.78
    },
    {
      "product": "Ideapad 330",
      "brand": "Lenovo",
      "CPU": "core i3-8130U",
      "memory": "4GB",
      "price": 459.98
    },
    {
      "product": "MacBook Pro",
      "brand": "Apple",
      "CPU": "core i5 2.5GHz",
      "memory": "4GB",
      "price": 2999.99
    }
  ]

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

  getToys(): Toys[]{
    return this.mockToys;
  }

  getLaptops(): Laptop[]{
    return this.mockLaptops;
  }

  constructor() { }
}
