import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dvd } from '../models/dvd.model';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../products/product.service';
import { DVDsListComponent } from './dvds-list.component';

describe('DVDsListComponent', () => {
  let component: DVDsListComponent;
  let fixture: ComponentFixture<DVDsListComponent>;

  beforeEach(async () => {

    const testDvds: Dvd[] = [
      {
        title: 'Avengers - Infinity War',
        mpaa_rating: 'PG-13',
        studio: 'MARVEL',
        time: 149,
        price: 18.55,
      },
      {
        title: 'Spider-Man Homecoming',
        mpaa_rating: '14 and over',
        studio: 'Sony Pictures Home Entertainment',
        time: 133,
        price: 7.23,
      },
      {
        title: 'Ant-Man',
        mpaa_rating: 'PG-13',
        studio: 'Walt Disney Video',
        time: 117,
        price: 19.98,
      },
      {
        title: 'Captain America',
        mpaa_rating: 'PG',
        studio: 'Walt Disney Video',
        time: 123,
        price: 24.88,
      },
    ];

    const productService = jasmine.createSpyObj('productService', ['getDvds']);
    productService.getDvds.and.returnValue(of(testDvds));

    await TestBed.configureTestingModule({
      declarations: [ DVDsListComponent ],
      imports: [HttpClientModule],
      providers: [
        {provide: ProductService, useValue: productService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DVDsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
