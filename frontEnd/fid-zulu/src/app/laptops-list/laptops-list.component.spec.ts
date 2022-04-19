import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../products/product.service';
import { LaptopsListComponent } from './laptops-list.component';
import { Laptop } from '../models/laptop';
import { RouterTestingModule } from '@angular/router/testing';

describe('LaptopsListComponent', () => {
  let component: LaptopsListComponent;
  let fixture: ComponentFixture<LaptopsListComponent>;

  beforeEach(async () => {

    const testLaptops: Laptop[] = [
      {
        product: 'ThinkPad T430s',
        brand: 'Lenovo',
        CPU: 'core i5-3320',
        memory: '8GB',
        price: 325.09,
      },
      {
        product: 'MacBook Air',
        brand: 'Apple',
        CPU: 'core i5 1.6GHz',
        memory: '4GB',
        price: 621.78,
      },
      {
        product: 'Ideapad 330',
        brand: 'Lenovo',
        CPU: 'core i3-8130U',
        memory: '4GB',
        price: 459.98,
      },
      {
        product: 'MacBook Pro',
        brand: 'Apple',
        CPU: 'core i5 2.5GHz',
        memory: '4GB',
        price: 2999.99,
      },
    ];


    const productService = jasmine.createSpyObj('productService', ['getLaptops']);
    productService.getLaptops.and.returnValue(of(testLaptops));


    await TestBed.configureTestingModule({
      declarations: [ LaptopsListComponent ],
      imports: [HttpClientModule,
                RouterTestingModule],
      providers: [
        {provide: ProductService, useValue: productService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
