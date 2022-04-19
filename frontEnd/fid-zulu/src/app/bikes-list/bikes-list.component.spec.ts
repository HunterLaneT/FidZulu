import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Bike } from '../models/bike.model';
import { HttpClientModule } from '@angular/common/http';

import { BikesListComponent } from './bikes-list.component';
import { ProductService } from '../products/product.service';

describe('BikesListComponent', () => {
  let component: BikesListComponent;
  let fixture: ComponentFixture<BikesListComponent>;

  beforeEach(async () => {

    const testBikes: Bike[] = [
      {
        name: 'Test Mamba Sport 12" Balance Bike',
        brand: 'Mamba Bikes',
        color: 'black',
        price: 75.88,
      },
      {
        name: 'Test DJ Fat Bike 500W',
        brand: 'DJ Bikes',
        color: 'grey',
        price: 1599.86,
      },
      {
        name: 'Test Kobe Aluminum Balance',
        brand: 'Kobe',
        color: 'blue',
        price: 88.56,
      },
      {
        name: "Test Pomona Men's Cruiser Bike",
        brand: 'Northwoods',
        color: 'silver',
        price: 221.36,
      },
    ];

    const productService = jasmine.createSpyObj('productService', ['getBikes']);
    productService.getBikes.and.returnValue(of(testBikes));


    await TestBed.configureTestingModule({
      declarations: [ BikesListComponent ],
      imports: [HttpClientModule],
      providers: [
        {provide: ProductService, useValue: productService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve bikes from the service', () => {
    expect(component.bikes[0].name).toBe('Test Mamba Sport 12" Balance Bike');
    expect(component.bikes[1].name).toBe('Test DJ Fat Bike 500W');
    });

  xit('should display an error message', () => {
      let errorDiv = fixture.debugElement.nativeElement
      .querySelector('.error');
      expect(errorDiv).toBeFalsy();
      component.errorMessage = 'An error';
      fixture.detectChanges();
      errorDiv = fixture.debugElement.nativeElement
      .querySelector('.error');
      expect(errorDiv).toBeTruthy();
      });
});
