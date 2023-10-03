import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadosService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : string = '';
  senha : string = '';
  loginIncorreto : boolean = false;
  acessoLogin : string = '';
  
  

  constructor(private router: Router, private estados: EstadosService) {}

  ngOnInit(): void {
  
}
usuarios : any[] = [
  {
    id: 1,
    cpf : "123.456.789-00",
    nome: "João",
    email : "joao@gmail.com",
    endereco : "Rua A, 123",
    telefone : "(11) 1234-5678",
    senha : "1234",
    tipo : "cliente"
  },
  {
    id : 2,
    cpf : "987.654.321-00",
    nome : "José",
    email : "jose@gmail.com",
    endereco : "Rua B, 456",
    telefone : "(11) 9876-5432",
    senha : "1234",
    tipo : "cliente"
  },
  {
    id : 3,
    cpf : "101.213.141-51",
    nome : "Joana",
    email : "joana@gmail.com",
    endereco : "Rua C, 789",
    telefone : "(11) 1012-1130",
    senha : "1234",
    tipo : "cliente"
  },
  {
    id : 1,
    cpf : "111.222.333-44",
    nome : "Maria",
    email : "maria@gmail.com",
    senha : "1234",
    cargo : "Atendente",
    tipo : "funcionario"
  },
  {
    id : 2,
    cpf : "222.333.444-55",
    nome : "Mário",
    email : "mario@gmail.com",
    senha : "1234",
    cargo : "Gerente",
    tipo : "funcionario"
  }
];


login(){

  const usuarioEncontrado = this.usuarios.find(
    (user) => user.email === this.usuario && user.senha === this.senha
  );
 
  if (usuarioEncontrado) {
      
      this.estados.alterarValor(true);

      if (usuarioEncontrado.tipo === 'cliente') {
        this.router.navigate(['/cliente']);
        this.acessoLogin = 'cliente';
      } 
      else if (usuarioEncontrado.tipo === 'funcionario') {
        this.router.navigate(['/funcionario']);
        this.acessoLogin = 'funcionario';
      }
 }
   
  else{
    this.loginIncorreto = true;
  }
}
}
