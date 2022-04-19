import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  city: string = "";

  getFood() {
    this.productService.getFood(this.city)
    .subscribe({
      next : (data) => {
        this.foods = data;
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

    this.getFood();
  }

}
