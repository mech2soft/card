import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardorderComponent } from './cardorder.component';

describe('CardorderComponent', () => {
  let component: CardorderComponent;
  let fixture: ComponentFixture<CardorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
