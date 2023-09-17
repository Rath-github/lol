import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento.component';

describe('ConfirmarRecolhimentoComponent', () => {
  let component: ConfirmarRecolhimentoComponent;
  let fixture: ComponentFixture<ConfirmarRecolhimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmarRecolhimentoComponent]
    });
    fixture = TestBed.createComponent(ConfirmarRecolhimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
