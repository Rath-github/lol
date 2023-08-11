import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoComponent } from './pedido.component';

describe('PedidoComponent', () => {
  let component: PedidoComponent;
  let fixture: ComponentFixture<PedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoComponent]
    });
    fixture = TestBed.createComponent(PedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
