import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bike } from '../models/bike.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['../app.component.css']
})
export class BikesListComponent implements OnInit {

  errorMessage: string = "";

  bikes: Bike[] = [];
  city: string = "";
  

  getBikes() {
    this.productService.getBikes(this.city)
    .subscribe({
      next : (data) => {
        this.bikes = data;
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

    this.getBikes();

  }


}
