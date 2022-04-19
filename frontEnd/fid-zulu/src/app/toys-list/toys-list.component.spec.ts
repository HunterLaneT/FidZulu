import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ToysListComponent } from './toys-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../products/product.service';
import { Toys } from '../models/toys';

describe('ToysListComponent', () => {
  let component: ToysListComponent;
  let fixture: ComponentFixture<ToysListComponent>;

  beforeEach(async () => {

   const testToys: Toys[] = [
      {
        name: 'Medical Kit',
        brand: 'Fisher-Price',
        ageGroup: '3 to 9',
        prize: 20.41,
      },
      {
        name: 'Ferry Boat',
        brand: 'Green Toys',
        ageGroup: '3 to 6',
        prize: 13.26,
      },
      {
        name: 'Rock-a-Stack',
        brand: 'Fisher-Price',
        ageGroup: '1 to 5',
        prize: 5.99,
      },
      {
        name: 'Stack Up Cups',
        brand: 'The First Years',
        ageGroup: '0 to 3',
        prize: 3.99,
      },
    ];

    const productService = jasmine.createSpyObj('productService', ['getToys']);
    productService.getToys.and.returnValue(of(testToys));

    await TestBed.configureTestingModule({
      declarations: [ ToysListComponent ],
      imports: [HttpClientModule],
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
