import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  city: string = "";

  getToys()  {
    this.productService.getToys(this.city)
            .subscribe(data => this.toysList = data);
  }

  constructor(private productService: ProductService
    ,  private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params =>{
      this.city = params['city'];
    }); 

    if(this.city == null){
      this.city = "Durham";
    }
    
    this.getToys();
  }

}
