import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainvelocityprofileComponent } from './maintainvelocityprofile.component';

describe('MaintainvelocityprofileComponent', () => {
  let component: MaintainvelocityprofileComponent;
  let fixture: ComponentFixture<MaintainvelocityprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainvelocityprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainvelocityprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
