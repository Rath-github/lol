import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css'],
})
export class AutocadastroComponent {
  constructor(private http: HttpClient) {}

  onSubmit(form: any): void {
    // Realizar a geração da senha aleatória de 4 dígitos
    const senhaAleatoria = Math.floor(1000 + Math.random() * 9000).toString();

    // Coletar os dados do usuário
    const userData = {
      cpf: form.cpf,
      nome: form.nome,
      email: form.email,
      endereco: form.endereco,
      telefone: form.telefone,
      senha: senhaAleatoria, // Adiciona a senha aleatória aos dados do usuário
    };

    // Enviar os dados para o servidor via HTTP POST
    this.http.post('http://localhost:3333/Clientes', userData).subscribe(
      (response) => {
        // O usuário foi cadastrado com sucesso, e você pode lidar com a resposta aqui.
        console.error('Sucesso ao cadastrar usuário:', response);
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
      }
    );
  }
}
