import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Food } from '../models/food';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../products/product.service';
import { FoodsListComponent } from './foods-list.component';

describe('FoodsListComponent', () => {
  let component: FoodsListComponent;
  let fixture: ComponentFixture<FoodsListComponent>;

  beforeEach(async () => {

    const testFood: Food[] = [
      {
        name: 'The Original Sandwich',
        brand: 'Oreo',
        weight: '303g',
        calories: 405,
        price: 2.85,
      },
      {
        name: 'Peanut Butter',
        brand: 'KRAFT',
        weight: '2000g',
        calories: 726,
        price: 9.39,
      },
      {
        name: 'Beef Ravioli',
        brand: 'Chef Boyardee',
        weight: '425g',
        calories: 250,
        price: 2.45,
      },
      {
        name: 'Medium Cheddar Cheese',
        brand: 'MOON CHEESE',
        weight: '57g',
        calories: 525,
        price: 5.87,
      },
    ];

    const productService = jasmine.createSpyObj('productService', ['getFood']);
    productService.getFood.and.returnValue(of(testFood));

    await TestBed.configureTestingModule({
      declarations: [ FoodsListComponent ],
      imports: [HttpClientModule],
      providers: [
        {provide: ProductService, useValue: productService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
