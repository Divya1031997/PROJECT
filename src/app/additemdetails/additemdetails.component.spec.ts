import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemdetailsComponent } from './additemdetails.component';

describe('AdditemdetailsComponent', () => {
  let component: AdditemdetailsComponent;
  let fixture: ComponentFixture<AdditemdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
