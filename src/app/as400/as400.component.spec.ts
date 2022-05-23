import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AS400Component } from './as400.component';

describe('AS400Component', () => {
  let component: AS400Component;
  let fixture: ComponentFixture<AS400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AS400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AS400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
