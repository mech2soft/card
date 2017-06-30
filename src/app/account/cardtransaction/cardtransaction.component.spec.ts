import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtransactionComponent } from './cardtransaction.component';

describe('CardtransactionComponent', () => {
  let component: CardtransactionComponent;
  let fixture: ComponentFixture<CardtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
