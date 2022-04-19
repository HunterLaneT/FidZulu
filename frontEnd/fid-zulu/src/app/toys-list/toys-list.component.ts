import { Component, OnInit } from '@angular/core';
import { Toys } from '../models/toys';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['../app.component.css']
})
export class ToysListComponent implements OnInit {

  errorMessage: string = "";

  toysList : Toys[] = []

  getToys()  {
    this.productService.getToys()
    .subscribe({
      next : (data) => {
        this.toysList = data;
        this.errorMessage = '';
      },
        error: (e) => this.errorMessage = e
      });
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getToys();
  }

}
