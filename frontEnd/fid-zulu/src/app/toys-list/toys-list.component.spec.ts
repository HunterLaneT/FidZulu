import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ToysListComponent } from './toys-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../products/product.service';
import { Toys } from '../models/toys';
import { RouterTestingModule } from '@angular/router/testing';

describe('ToysListComponent', () => {
  let component: ToysListComponent;
  let fixture: ComponentFixture<ToysListComponent>;

  beforeEach(async () => {

   const testToys: Toys[] = [
      {
        name: 'Medical Kit',
        brand: 'Fisher-Price',
        age_group: '3 to 9',
        price: 20.41,
      },
      {
        name: 'Ferry Boat',
        brand: 'Green Toys',
        age_group: '3 to 6',
        price: 13.26,
      },
      {
        name: 'Rock-a-Stack',
        brand: 'Fisher-Price',
        age_group: '1 to 5',
        price: 5.99,
      },
      {
        name: 'Stack Up Cups',
        brand: 'The First Years',
        age_group: '0 to 3',
        price: 3.99,
      },
    ];

    const productService = jasmine.createSpyObj('productService', ['getToys']);
    productService.getToys.and.returnValue(of(testToys));

    await TestBed.configureTestingModule({
      declarations: [ ToysListComponent ],
      imports: [HttpClientModule,
                RouterTestingModule],
      providers: [
        {provide: ProductService, useValue: productService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
