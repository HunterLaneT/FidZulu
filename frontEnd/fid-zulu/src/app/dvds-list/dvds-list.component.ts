import { Component, OnInit } from '@angular/core';
import { Dvd } from '../models/dvd.model';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-dvds-list',
  templateUrl: './dvds-list.component.html',
  styleUrls: ['./dvds-list.component.css'],
})
export class DVDsListComponent implements OnInit {
  dvds: Dvd[] = [];

  getDvds() {
    this.dvds = this.productService.getDvds();
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getDvds();
  }
}
