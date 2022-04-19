import { Component, OnInit } from '@angular/core';
import { Laptop } from '../models/laptop';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['../app.component.css']
})
export class LaptopsListComponent implements OnInit {

  errorMessage: string = "";

  laptops: Laptop[] = []

  getLaptops(){
    this.productService.getLaptops()
    .subscribe({
      next : (data) => {
        this.laptops = data;
        this.errorMessage = '';
      },
        error: (e) => this.errorMessage = e
      });
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getLaptops();
  }

}
