import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintaincardgroupComponent } from './maintaincardgroup.component';

describe('MaintaincardgroupComponent', () => {
  let component: MaintaincardgroupComponent;
  let fixture: ComponentFixture<MaintaincardgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintaincardgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintaincardgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
