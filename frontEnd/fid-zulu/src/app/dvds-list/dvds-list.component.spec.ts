import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVDsListComponent } from './dvds-list.component';

describe('DVDsListComponent', () => {
  let component: DVDsListComponent;
  let fixture: ComponentFixture<DVDsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVDsListComponent ]
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
