import { Component, OnInit } from '@angular/core';

interface Funcionario {
  id: number;
  email: string;
  nome: string;
  dataNascimento: string;
  senha: string;
}

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  novoFuncionario: Funcionario = {
    id: 0,
    email: '',
    nome: '',
    dataNascimento: '',
    senha: '',
  };

  constructor() {}

  ngOnInit(): void {
    // Carregue os funcionários existentes, se necessário
  }

  adicionarFuncionario(): void {
    // Adicione o novo funcionário à lista de funcionários
    this.funcionarios.push(this.novoFuncionario);
    // Limpe os campos do formulário
    this.novoFuncionario = {
      id: 0,
      email: '',
      nome: '',
      dataNascimento: '',
      senha: '',
    };
  }

  removerFuncionario(index: number): void {
    // Remova o funcionário da lista pelo índice
    this.funcionarios.splice(index, 1);
  }

  // Implementar outras funcionalidades de atualização e listagem
}
