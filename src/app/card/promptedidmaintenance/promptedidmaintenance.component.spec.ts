import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptedidmaintenanceComponent } from './promptedidmaintenance.component';

describe('PromptedidmaintenanceComponent', () => {
  let component: PromptedidmaintenanceComponent;
  let fixture: ComponentFixture<PromptedidmaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptedidmaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptedidmaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
