import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptedidpoolmaintenanceComponent } from './promptedidpoolmaintenance.component';

describe('PromptedidpoolmaintenanceComponent', () => {
  let component: PromptedidpoolmaintenanceComponent;
  let fixture: ComponentFixture<PromptedidpoolmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptedidpoolmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptedidpoolmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
