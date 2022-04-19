import { Component, OnInit } from '@angular/core';
import { Bike } from '../models/bike.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['../app.component.css']
})
export class BikesListComponent implements OnInit {

  errorMessage: string = "";

  bikes: Bike[] = []

  getBikes(){
    this.productService.getBikes()
            .subscribe(data => this.bikes = data);
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getBikes();
  }

}
