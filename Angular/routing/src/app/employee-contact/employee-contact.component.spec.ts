import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContactComponent } from './employee-contact.component';

describe('EmployeeContactComponent', () => {
  let component: EmployeeContactComponent;
  let fixture: ComponentFixture<EmployeeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
