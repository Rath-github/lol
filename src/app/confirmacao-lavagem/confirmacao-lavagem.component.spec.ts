import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoLavagemComponent } from './confirmacao-lavagem.component';

describe('ConfirmacaoLavagemComponent', () => {
  let component: ConfirmacaoLavagemComponent;
  let fixture: ComponentFixture<ConfirmacaoLavagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacaoLavagemComponent]
    });
    fixture = TestBed.createComponent(ConfirmacaoLavagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
