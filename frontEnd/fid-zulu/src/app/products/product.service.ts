import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  mockBikes: Bike[] = [
    {
      "name": "Mamba Sport 12\" Balance Bike",
      "brand": "Mamba Bikes",
      "color": "black",
      "price": 75.88
    },
    {
      "name": "DJ Fat Bike 500W",
      "brand": "DJ Bikes",
      "color": "grey",
      "price": 1599.86
    },
    {
      "name": "Kobe Aluminum Balance",
      "brand": "Kobe",
      "color": "blue",
      "price": 88.56
    },
    {
      "name": "Pomona Men's Cruiser Bike",
      "brand": "Northwoods",
      "color": "silver",
      "price": 221.36
    }
  ]



  constructor() { }
}
