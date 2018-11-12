import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoloyeeComponent } from './emoloyee.component';

describe('EmoloyeeComponent', () => {
  let component: EmoloyeeComponent;
  let fixture: ComponentFixture<EmoloyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoloyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
