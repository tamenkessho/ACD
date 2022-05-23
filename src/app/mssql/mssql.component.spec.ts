import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSSQLComponent } from './mssql.component';

describe('MSSQLComponent', () => {
  let component: MSSQLComponent;
  let fixture: ComponentFixture<MSSQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSSQLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
