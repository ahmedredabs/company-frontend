import { TestBed } from '@angular/core/testing';

import { EstablishmentService } from './establishment.service';

describe('CompanyRegisterService', () => {
  let service: EstablishmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablishmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
