import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFechaComponent } from './reporte-fecha.component';

describe('ReporteFechaComponent', () => {
  let component: ReporteFechaComponent;
  let fixture: ComponentFixture<ReporteFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
