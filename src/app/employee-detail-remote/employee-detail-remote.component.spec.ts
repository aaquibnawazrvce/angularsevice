import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailRemoteComponent } from './employee-detail-remote.component';

describe('EmployeeDetailRemoteComponent', () => {
  let component: EmployeeDetailRemoteComponent;
  let fixture: ComponentFixture<EmployeeDetailRemoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailRemoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
