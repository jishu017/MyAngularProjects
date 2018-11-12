import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmolyeeListComponent } from './emolyee-list.component';

describe('EmolyeeListComponent', () => {
  let component: EmolyeeListComponent;
  let fixture: ComponentFixture<EmolyeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmolyeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmolyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
