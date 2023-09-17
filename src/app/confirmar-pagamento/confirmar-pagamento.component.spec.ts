import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPagamentoComponent } from './confirmar-pagamento.component';

describe('ConfirmarPagamentoComponent', () => {
  let component: ConfirmarPagamentoComponent;
  let fixture: ComponentFixture<ConfirmarPagamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarPagamentoComponent]
    });
    fixture = TestBed.createComponent(ConfirmarPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
