import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySQLComponent } from './my-sql.component';

describe('MySQLComponent', () => {
  let component: MySQLComponent;
  let fixture: ComponentFixture<MySQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySQLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
