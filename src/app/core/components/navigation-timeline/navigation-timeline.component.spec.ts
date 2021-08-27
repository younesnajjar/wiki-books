import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTimelineComponent } from './navigation-timeline.component';

describe('NavigationTimelineComponent', () => {
  let component: NavigationTimelineComponent;
  let fixture: ComponentFixture<NavigationTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
