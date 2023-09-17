import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioClientesFieisComponent } from './relatorio-clientes-fieis.component';

describe('RelatorioClientesFieisComponent', () => {
  let component: RelatorioClientesFieisComponent;
  let fixture: ComponentFixture<RelatorioClientesFieisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioClientesFieisComponent]
    });
    fixture = TestBed.createComponent(RelatorioClientesFieisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
