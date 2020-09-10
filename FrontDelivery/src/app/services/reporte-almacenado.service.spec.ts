import { TestBed } from '@angular/core/testing';

import { ReporteAlmacenadoService } from './reporte-almacenado.service';

describe('ReporteAlmacenadoService', () => {
  let service: ReporteAlmacenadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteAlmacenadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
