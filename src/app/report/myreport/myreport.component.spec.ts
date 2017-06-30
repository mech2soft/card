import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreportComponent } from './myreport.component';

describe('MyreportComponent', () => {
  let component: MyreportComponent;
  let fixture: ComponentFixture<MyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
