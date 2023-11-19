import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css'],
})

export class AutocadastroComponent {

  constructor(private http: HttpClient) {}

 
  endereco : string = '';
  sucesso : boolean = false;
  erro : boolean = false;
  telefone: string = '';
  cpf: string = '';
  cep : string = '';


  onSubmit(form: any): void {
    // Realizar a geração da senha aleatória de 4 dígitos
    //const senhaAleatoria = Math.floor(1000 + Math.random() * 9000).toString();

    // Coletar os dados do usuário
    const userData = {
      cpf: form.cpf,
      nome: form.nome,
      email: form.email,
      endereco: this.endereco,
      telefone: form.telefone,
      //senha: senhaAleatoria, // Adiciona a senha aleatória aos dados do usuário
    };

    if(userData.cpf && userData.nome && userData.email && userData.endereco && userData.telefone){
    // Enviar os dados para o servidor via HTTP POST
    this.http.post('http://localhost:8080/api/clientes/criar', userData).subscribe(
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

  formatarCPF(event: any): void {
    let cpfNumber = event.target.value;
    cpfNumber = cpfNumber.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Aplica a máscara 000.000.000-00
    cpfNumber = cpfNumber.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');

    this.cpf = cpfNumber;
  }

  formatarCEP(event: any): void {
    let cepNumber = event.target.value;
    cepNumber = cepNumber.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Aplica a máscara 00.000-000
    cepNumber = cepNumber.replace(/^(\d{2})(\d{3})(\d{3}).*/, '$1.$2-$3');

    this.cep = cepNumber;
  }

  // Método para aplicar a máscara ao número de telefone
  formatarTelefone(event: any): void {
    // Obtém o valor atual do campo de telefone
    let phoneNumber = event.target.value;

    // Remove qualquer caractere que não seja número
    phoneNumber = phoneNumber.replace(/\D/g, '');

    // Aplica a máscara (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    if (phoneNumber.length === 11) {
      phoneNumber = phoneNumber.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else {
      phoneNumber = phoneNumber.replace(/^(\d{2})(\d{4})(\d{4}).*/, '($1) $2-$3');
    }

    // Atualiza o valor do campo com a máscara aplicada
    this.telefone = phoneNumber;
  }
}