import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecardgroupComponent } from './createcardgroup.component';

describe('CreatecardgroupComponent', () => {
  let component: CreatecardgroupComponent;
  let fixture: ComponentFixture<CreatecardgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecardgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecardgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
