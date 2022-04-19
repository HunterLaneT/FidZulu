import { Component, OnInit } from '@angular/core';
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

  getDvds() {
    this.productService.getDvds()
            .subscribe(data => this.dvds = data);
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getDvds();
  }
}
