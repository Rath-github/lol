import { Component } from '@angular/core';
import { Usuario } from '../shared/models';
import { AutocadastroService } from '../services/autocadastro/autocadastro.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent {
  id: string = '';
  cpf: string = '';
  nome: string = '';
  email: string = '';
  endereco: string = '';
  telefone: string = '';
  senha: string ='';
  novoUsuario: Usuario = new Usuario(this.id,this.cpf,this.nome, this.email, this.endereco, this.telefone,this.senha);


  usuario: Usuario = new Usuario(this.id,this.cpf,this.nome, this.email, this.endereco, this.telefone,this.senha);

  constructor(private autocadastroService: AutocadastroService) {}
  

  onSubmit() {
    

    this.usuario = new Usuario (this.id,this.cpf,this.nome, this.email, this.endereco, this.telefone,this.senha);

    this.autocadastroService.cadastrarUsuario(this.usuario).subscribe(response => {
          console.log('Usuário cadastrado com sucesso!', response);
          // Limpar campos ou redirecionar, se necessário
        },
        error => {
          console.error('Erro ao cadastrar o usuário.', error);
        }
      );
  }
}
