import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerdetailsComponent } from './buyerdetails.component';

describe('BuyerdetailsComponent', () => {
  let component: BuyerdetailsComponent;
  let fixture: ComponentFixture<BuyerdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
