import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  city: string = "";

  getLaptops(){
    this.productService.getLaptops( this.city)
            .subscribe(data => this.laptops = data);
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
    
    this.getLaptops();
  }

}
