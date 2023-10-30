import { TestBed } from '@angular/core/testing';

import { AutocadastroService } from './autocadastro.service';

describe('AutocadastroService', () => {
  let service: AutocadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutocadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
