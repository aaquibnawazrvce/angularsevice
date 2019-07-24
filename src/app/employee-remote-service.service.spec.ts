import { TestBed } from '@angular/core/testing';

import { EmployeeRemoteServiceService } from './employee-remote-service.service';

describe('EmployeeRemoteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeRemoteServiceService = TestBed.get(EmployeeRemoteServiceService);
    expect(service).toBeTruthy();
  });
});
