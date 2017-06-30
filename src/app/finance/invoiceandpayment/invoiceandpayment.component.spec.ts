import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceandpaymentComponent } from './invoiceandpayment.component';

describe('InvoiceandpaymentComponent', () => {
  let component: InvoiceandpaymentComponent;
  let fixture: ComponentFixture<InvoiceandpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceandpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceandpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
