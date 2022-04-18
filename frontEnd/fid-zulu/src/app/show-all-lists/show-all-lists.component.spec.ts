import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllListsComponent } from './show-all-lists.component';

describe('ShowAllListsComponent', () => {
  let component: ShowAllListsComponent;
  let fixture: ComponentFixture<ShowAllListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
