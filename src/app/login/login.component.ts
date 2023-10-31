import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EstadosService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';
  loginIncorreto: boolean = false;

  constructor(
    private router: Router,
    private estados: EstadosService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  login() {
    this.http
      .get<any[]>('http://localhost:3333/Clientes')
      .subscribe((clientes) => {
        this.http
          .get<any[]>('http://localhost:3333/Funcionarios')
          .subscribe((funcionarios) => {
            const usuarios = [...clientes, ...funcionarios];

            const usuarioEncontrado = usuarios.find(
              (user) => user.email === this.usuario && user.senha === this.senha
            );

            if (usuarioEncontrado) {
              this.estados.alterarValor(true);
              this.estados.emailUsuario(usuarioEncontrado.email);

              if (usuarioEncontrado.tipo === 'cliente') {
                this.estados.tipoUsuario('cliente');
                this.router.navigate(['/cliente']);
              } else if (usuarioEncontrado.tipo === 'funcionario') {
                this.estados.tipoUsuario('funcionario');
                this.router.navigate(['/funcionario']);
              }
            } else {
              this.loginIncorreto = true;
            }
          });
      });
  }
}
