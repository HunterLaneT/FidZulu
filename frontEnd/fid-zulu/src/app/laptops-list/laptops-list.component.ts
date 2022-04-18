import { Component, OnInit } from '@angular/core';
import { Laptop } from '../models/laptop';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['../app.component.css']
})
export class LaptopsListComponent implements OnInit {

  laptops: Laptop[] = []

  getLaptops(){

    this.laptops = this.productService.getLaptops();

  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getLaptops();
  }

}
