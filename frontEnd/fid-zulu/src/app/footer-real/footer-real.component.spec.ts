import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRealComponent } from './footer-real.component';

describe('FooterRealComponent', () => {
  let component: FooterRealComponent;
  let fixture: ComponentFixture<FooterRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
