import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysListComponent } from './toys-list.component';

describe('ToysListComponent', () => {
  let component: ToysListComponent;
  let fixture: ComponentFixture<ToysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysListComponent ]
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
