import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../products/product.service';
import { BooksListComponent } from './books-list.component';
import { Book } from '../models/book.model';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async () => {

    const testBooks: Book[] = [
      {
        "title": "Lord of the Rings",
        "author": "J.R.R Tolkien",
        "price": 25.99,
        "isbn": "9780261102385",
        "publisher": "HarperCollins"
      },
      {
        "title": "The Hobbit",
        "author": "J.R.R Tolkien",
        "price": 9.88,
        "isbn": "0261102214",
        "publisher": "HarperCollins"
      },
      {
        "title": "Lord of Souls",
        "author": "Greg Keyes",
        "price": 12.98,
        "isbn": "0345508025",
        "publisher": "Del Rey"
      },
      {
        "title": "Chronicles of Narnia",
        "author": "C. S. Lewis",
        "price": 41.77,
        "isbn": "0064471195",
        "publisher": "HarperCollins"
      }
    ]

    const productService = jasmine.createSpyObj('productService', ['getBooks']);
    productService.getBooks.and.returnValue(of(testBooks));

    await TestBed.configureTestingModule({
      declarations: [ BooksListComponent ],
      imports: [HttpClientModule],
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
