import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../products/product.service';
import { BooksListComponent } from './books-list.component';
import { Book } from '../models/book.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async () => {

    const testBooks: Book[] = [
      {
        "Title": "Lord of the Rings",
        "Author": "J.R.R Tolkien",
        "price": 25.99,
        "ISBN": "9780261102385",
        "publisher": "HarperCollins"
      },
      {
        "Title": "The Hobbit",
        "Author": "J.R.R Tolkien",
        "price": 9.88,
        "ISBN": "0261102214",
        "publisher": "HarperCollins"
      },
      {
        "Title": "Lord of Souls",
        "Author": "Greg Keyes",
        "price": 12.98,
        "ISBN": "0345508025",
        "publisher": "Del Rey"
      },
      {
        "Title": "Chronicles of Narnia",
        "Author": "C. S. Lewis",
        "price": 41.77,
        "ISBN": "0064471195",
        "publisher": "HarperCollins"
      }
    ]

    const productService = jasmine.createSpyObj('productService', ['getBooks']);
    productService.getBooks.and.returnValue(of(testBooks));

    await TestBed.configureTestingModule({
      declarations: [ BooksListComponent ],
      imports: [HttpClientModule,
                RouterTestingModule],
      providers: [
        {provide: ProductService, useValue: productService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
