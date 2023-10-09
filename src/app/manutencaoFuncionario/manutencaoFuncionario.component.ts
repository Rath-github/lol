import { Component, OnInit } from '@angular/core';

interface Funcionario {
  id: number;
  cpf : string;
  nome: string;
  email: string;
  dtNascimento: string;
  senha : string;
  cargo : string;
  tipo : string;
}

@Component({
  selector: 'app-ManutFuncionarios',
  templateUrl: './manutencaoFuncionario.component.html',
  styleUrls: ['./manutencaoFuncionario.component.css'],
})
export class ManutencaoFuncionarioComponent implements OnInit {
  funcionarios : Funcionario[] = [
  
    {
      id: 1,
      cpf: '111.222.333-44',
      nome: 'Maria',
      email: 'maria@gmail.com',
      dtNascimento: '15/05/2000',
      senha: '1234',
      cargo: 'Atendente',
      tipo: 'funcionario',
    },
    {
      id: 2,
      cpf: '222.333.444-55',
      nome: 'Mário',
      email: 'mario@gmail.com',
      dtNascimento: '03/02/1952',
      senha: '1234',
      cargo: 'Gerente',
      tipo: 'funcionario',
    },
  ];
 
  campoEditar: boolean = false;
  campoNovo: boolean = false;
  nomeSelecionado: string='';
  maiorId = this.funcionarios.reduce((maxId, funcionario) => { return Math.max(maxId, funcionario.id);}, 0);
  
  
  
  novoFuncionario: Funcionario = {
    id: this.maiorId + 1,
    cpf: '',
    nome: '',
    email: '',
    dtNascimento: '',
    senha: '',
    cargo: '',
    tipo: '',
  };

  
  
  constructor() {}


  ngOnInit(): void {
    // Carregue os funcionários existentes, se necessário
  }

  adicionarFuncionario(): void {
    this.maiorId ++;
    // Adicione o novo funcionário à lista de funcionários
    this.funcionarios.push(this.novoFuncionario);
    // Limpe os campos do formulário
    this.novoFuncionario = {
      id: this.maiorId + 1,
      cpf: '',
      nome: '',
      email: '',
      dtNascimento: '',
      senha: '',
      cargo: '',
      tipo: '',
    };    
  }

  removerFuncionario(index: number): void {
    // Remova o funcionário da lista pelo índice
    this.funcionarios.splice(index, 1);
  }
  
  selecionarEditar(id: number){
    const index = this.funcionarios.findIndex((funcionario) => funcionario.id === id);


    this.campoEditar = true;
    this.campoNovo=false;


    this.novoFuncionario = { ...this.funcionarios[index] }; // o operador ... (spread) cria uma copia do conteudo da variavel sem que elas compartilhem do mesmo objeto
    
  }

  editar(){
    const index = this.funcionarios.findIndex((funcionario) => funcionario.id === this.novoFuncionario.id);
   
    this.funcionarios[index] = this.novoFuncionario; 

    this.campoEditar = false;
  
   // console.log(this.pecas[index].nome);
  //  console.log(this.roupaSelecionada.nome);
    this.novoFuncionario = {
      id: this.maiorId + 1,
      cpf: '',
      nome: '',
      email: '',
      dtNascimento: '',
      senha: '',
      cargo: '',
      tipo: '',
    };
  }
}

