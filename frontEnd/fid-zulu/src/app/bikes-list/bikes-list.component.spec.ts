import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesListComponent } from './bikes-list.component';

describe('BikesListComponent', () => {
  let component: BikesListComponent;
  let fixture: ComponentFixture<BikesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesListComponent ]
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
});
