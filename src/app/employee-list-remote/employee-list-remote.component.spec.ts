import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListRemoteComponent } from './employee-list-remote.component';

describe('EmployeeListRemoteComponent', () => {
  let component: EmployeeListRemoteComponent;
  let fixture: ComponentFixture<EmployeeListRemoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListRemoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
