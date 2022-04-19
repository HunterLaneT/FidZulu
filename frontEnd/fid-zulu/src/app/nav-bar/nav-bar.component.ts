import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../app.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route: Router) { }

  city : string = "Durham";

  displayBikes(){
    this.route.navigate(["/bikes"],{
      queryParams: { city: this.city },
    })
  }

  displayToys(){
    this.route.navigate(["/toys"],{
      queryParams: { city: this.city },
    })
  }

  displayLaptops(){
    this.route.navigate(["/laptops"],{
      queryParams: { city: this.city },
    })
  }

  displayDvds(){
    this.route.navigate(["/dvds"],{
      queryParams: { city: this.city },
    })
  }

  displayBooks(){
    this.route.navigate(["/books"],{
      queryParams: { city: this.city },
    })
  }

  displayFoods(){
    this.route.navigate(["/foods"],{
      queryParams: { city: this.city },
    })
  }

  ngOnInit(): void {
  }

}
