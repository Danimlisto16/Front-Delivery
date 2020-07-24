import { TestBed } from '@angular/core/testing';

import { PRODUCTOCATEGORIAService } from './producto-categoria.service';

describe('PRODUCTOCATEGORIAService', () => {
  let service: PRODUCTOCATEGORIAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PRODUCTOCATEGORIAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
