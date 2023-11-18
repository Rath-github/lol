import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Funcionario {
  id: number;
  cpf: string;
  nome: string;
  email: string;
  dtNascimento: string;
  senha: string;
  tipo: string;
}

@Component({
  selector: 'app-ManutFuncionarios',
  templateUrl: './manutencaoFuncionario.component.html',
  styleUrls: ['./manutencaoFuncionario.component.css'],
})
export class ManutencaoFuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  campoEditar: boolean = false;
  campoNovo: boolean = false;
  nomeSelecionado: string = '';
  novoFuncionario: Funcionario = {
    id: 0,
    cpf: '',
    nome: '',
    email: '',
    dtNascimento: '',
    senha: '',
    tipo: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarFuncionarios();
  }

  carregarFuncionarios(): void {
    this.http.get<Funcionario[]>('http://localhost:3333/funcionarios').subscribe((funcionarios) => {
      this.funcionarios = funcionarios;
    });
  }

  adicionarFuncionario(): void {
    this.http.post('http://localhost:3333/funcionarios', this.novoFuncionario).subscribe(() => {
      this.carregarFuncionarios();
      this.novoFuncionario = {
        id: 0,
        cpf: '',
        nome: '',
        email: '',
        dtNascimento: '',
        senha: '',
        tipo: '',
      };
      this.campoNovo = false;
    });
  }

  removerFuncionario(id: number): void {
    this.http.delete(`http://localhost:3333/funcionarios/${id}`).subscribe(() => {
      this.carregarFuncionarios();
    });
  }

  selecionarEditar(id: number): void {
    this.http.get<Funcionario>(`http://localhost:3333/funcionarios/${id}`).subscribe((funcionario) => {
      this.novoFuncionario = funcionario || {
        id: 0,
        cpf: '',
        nome: '',
        email: '',
        dtNascimento: '',
        senha: '',
        tipo: '',
      };
      this.campoEditar = true;
      this.campoNovo = false;
    });
  }

  editar(): void {
    this.http.put(`http://localhost:3333/funcionarios/${this.novoFuncionario.id}`, this.novoFuncionario).subscribe(() => {
      this.carregarFuncionarios();
      this.campoEditar = false;
    });
  }
  formatarData(dataString: string): string {
    if (dataString && dataString.length === 8) {
      const dia = dataString.substr(0, 2);
      const mes = dataString.substr(2, 2);
      const ano = dataString.substr(4, 4);
      return `${dia}/${mes}/${ano}`;
    } else {
      return 'Data inválida';
    }}
}
