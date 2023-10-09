import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManutencaoFuncionarioComponent } from './manutencaoFuncionario.component';


describe('FuncionariosComponent', () => {
  let component: ManutencaoFuncionarioComponent;
  let fixture: ComponentFixture<ManutencaoFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManutencaoFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ManutencaoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
