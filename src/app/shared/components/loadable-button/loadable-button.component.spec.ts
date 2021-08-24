import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadableButtonComponent } from './loadable-button.component';

describe('LoadableButtonComponent', () => {
  let component: LoadableButtonComponent;
  let fixture: ComponentFixture<LoadableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadableButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
