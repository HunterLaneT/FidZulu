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
            .subscribe(data => this.toysList = data);
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getToys();
  }

}
