import { TestBed } from '@angular/core/testing';

import { AddEmployeeServiceService } from './add-employee-service.service';

describe('AddEmployeeServiceService', () => {
  let service: AddEmployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEmployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
