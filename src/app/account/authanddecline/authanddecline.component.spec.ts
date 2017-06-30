import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthanddeclineComponent } from './authanddecline.component';

describe('AuthanddeclineComponent', () => {
  let component: AuthanddeclineComponent;
  let fixture: ComponentFixture<AuthanddeclineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthanddeclineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthanddeclineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
