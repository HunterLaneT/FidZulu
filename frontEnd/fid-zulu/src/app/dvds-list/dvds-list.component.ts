import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dvd } from '../models/dvd.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-dvds-list',
  templateUrl: './dvds-list.component.html',
  styleUrls: ['../app.component.css'],
})
export class DVDsListComponent implements OnInit {

  errorMessage: string = "";

  dvds: Dvd[] = [];
  city: string = "";

  getDvds() {
    this.productService.getDvds(this.city)
            .subscribe(data => this.dvds = data);
  }

  constructor(private productService: ProductService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.city = params['city'];
    }); 

    if(this.city == null){
      this.city = "Durham";
    }

    this.getDvds();
  }
}
