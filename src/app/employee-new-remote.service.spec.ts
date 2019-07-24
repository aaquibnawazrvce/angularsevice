import { TestBed } from '@angular/core/testing';

import { EmployeeNewRemoteService } from './employee-new-remote.service';

describe('EmployeeNewRemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeNewRemoteService = TestBed.get(EmployeeNewRemoteService);
    expect(service).toBeTruthy();
  });
});
