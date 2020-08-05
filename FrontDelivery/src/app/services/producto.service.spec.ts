import { TestBed } from '@angular/core/testing';

import { PRODUCTOService } from './producto.service';

describe('PRODUCTOService', () => {
  let service: PRODUCTOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PRODUCTOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
