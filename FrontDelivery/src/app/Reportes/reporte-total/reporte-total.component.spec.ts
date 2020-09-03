import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTotalComponent } from './reporte-total.component';

describe('ReporteTotalComponent', () => {
  let component: ReporteTotalComponent;
  let fixture: ComponentFixture<ReporteTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
