import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-foods-list',
  templateUrl: './foods-list.component.html',
  styleUrls: ['../app.component.css']
})
export class FoodsListComponent implements OnInit {

  errorMessage: string = "";

  foods: Food[] = [];

  getFood() {
    this.productService.getFood()
            .subscribe(data => this.foods = data);
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getFood();
  }

}
