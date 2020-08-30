import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPagoComponent } from './carrito-pago.component';

describe('CarritoPagoComponent', () => {
  let component: CarritoPagoComponent;
  let fixture: ComponentFixture<CarritoPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
