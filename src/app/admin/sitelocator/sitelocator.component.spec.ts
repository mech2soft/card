import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitelocatorComponent } from './sitelocator.component';

describe('SitelocatorComponent', () => {
  let component: SitelocatorComponent;
  let fixture: ComponentFixture<SitelocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitelocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitelocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
