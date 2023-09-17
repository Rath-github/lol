import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPedidoComponent } from './consulta-pedido.component';

describe('ConsultaPedidoComponent', () => {
  let component: ConsultaPedidoComponent;
  let fixture: ComponentFixture<ConsultaPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaPedidoComponent]
    });
    fixture = TestBed.createComponent(ConsultaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
