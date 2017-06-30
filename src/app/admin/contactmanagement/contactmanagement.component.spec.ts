import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmanagementComponent } from './contactmanagement.component';

describe('ContactmanagementComponent', () => {
  let component: ContactmanagementComponent;
  let fixture: ComponentFixture<ContactmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
