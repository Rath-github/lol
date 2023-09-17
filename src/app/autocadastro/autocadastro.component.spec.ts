import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocadastroComponent } from './autocadastro.component';

describe('AutocadastroComponent', () => {
  let component: AutocadastroComponent;
  let fixture: ComponentFixture<AutocadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocadastroComponent]
    });
    fixture = TestBed.createComponent(AutocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
