import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubmitComponent } from './employee-submit.component';

describe('EmployeeSubmitComponent', () => {
  let component: EmployeeSubmitComponent;
  let fixture: ComponentFixture<EmployeeSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
