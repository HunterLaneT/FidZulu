import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['./foods-list.component.css']
})
export class FoodsListComponent implements OnInit {

  foods: Food[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getFood();
  }

  getFood() {
    this.foods = this.productService.getFood();
  }

}
