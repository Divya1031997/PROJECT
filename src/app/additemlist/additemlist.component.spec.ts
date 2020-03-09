import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemlistComponent } from './additemlist.component';

describe('AdditemlistComponent', () => {
  let component: AdditemlistComponent;
  let fixture: ComponentFixture<AdditemlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
