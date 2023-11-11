import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css'],
})

export class AutocadastroComponent {

  constructor(private http: HttpClient) {}

  cep : string = '';
  endereco : string = '';
  sucesso : boolean = false;
  erro : boolean = false;

  onSubmit(form: any): void {
    // Realizar a geração da senha aleatória de 4 dígitos
    const senhaAleatoria = Math.floor(1000 + Math.random() * 9000).toString();

    // Coletar os dados do usuário
    const userData = {
      cpf: form.cpf,
      nome: form.nome,
      email: form.email,
      endereco: this.endereco,
      telefone: form.telefone,
      senha: senhaAleatoria, // Adiciona a senha aleatória aos dados do usuário
    };

    if(userData.cpf && userData.nome && userData.email && userData.endereco && userData.telefone){
    // Enviar os dados para o servidor via HTTP POST
    this.http.post('http://localhost:3333/Clientes', userData).subscribe(
      (response) => {
        // O usuário foi cadastrado com sucesso, e você pode lidar com a resposta aqui.
        console.log('Sucesso ao cadastrar usuário:', response);
        this.sucesso = true;
        this.erro = false;
        
      },
      (error) => {
        console.error('Erro ao cadastrar usuário:', error);
        this.sucesso = false;
        this.erro = true;
      }
    );

  }}

  buscaCep(){
    if (this.cep && (this.cep.length === 8||this.cep.length === 9)) {
      this.http.get<any>(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe((cep) => { 
        const endereco = cep;
        this.endereco = cep.logradouro + ", " + cep.bairro + ", " + cep.localidade + "/ " + cep.uf;
      });
    }
  }
}