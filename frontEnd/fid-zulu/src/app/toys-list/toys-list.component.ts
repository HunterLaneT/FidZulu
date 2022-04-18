import { Component, OnInit } from '@angular/core';
import { Toys } from '../models/toys';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['../app.component.css']
})
export class ToysListComponent implements OnInit {

  toysList : Toys[] = []; 

  getToys()  {
    this.toysList = this.service.getToys();
  }

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getToys();
  }

}
