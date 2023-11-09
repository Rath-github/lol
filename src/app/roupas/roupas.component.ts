import { Component } from '@angular/core';
import { Roupa } from './roupaModelo/roupa.model';


@Component({
  selector: 'app-roupas',
  templateUrl: './roupas.component.html',
  styleUrls: ['./roupas.component.css']
})
export class RoupasComponent {
  pecas: Roupa[]=[
    new Roupa(1,'camisa',50,2),
    new Roupa(2,'calca',100,3),
    new Roupa(3,'vestido',150,4)];

    campoEditar: boolean = false;
    campoNovo: boolean = false;
    nomeSelecionado: string='';
    
    roupaSelecionada: Roupa = new Roupa(0, '', 0, 0);
    novaRoupa: Roupa = new Roupa(0, '', 0, 0);
    
    
    
  remover(id:number){
    if (confirm(`Deseja realmente remover o item: ${id}?`)) {
      this.pecas = this.pecas.filter(Roupa=> Roupa.id !=id);
      }
  
  }

  selecionarEditar(id: number){
  
    this.roupaSelecionada = this.pecas.find((Roupa) => Roupa.id === id) || new Roupa(0, '', 0, 0);

    this.campoEditar = true;
    this.campoNovo=false;
    console.log(this.roupaSelecionada.id);

    this.novaRoupa = { ...this.roupaSelecionada }; // o operador ... (spread) cria uma copia do conteudo da variavel sem que elas compartilhem do mesmo objeto
    
  }

  editar(){
    const index = this.pecas.findIndex((roupa) => roupa.id === this.roupaSelecionada.id);
    this.novaRoupa.id = this.roupaSelecionada.id;
    this.roupaSelecionada = this.novaRoupa ; 

    this.pecas[index] = this.roupaSelecionada; 
    
    this.campoEditar = false;

    console.log(this.pecas[index].nome);
    console.log(this.roupaSelecionada.nome);
  
  }

  novo(){
    let maiorId = this.pecas.reduce((maxId, roupa) => {
      return Math.max(maxId, roupa.id);
    }, 0);

   
    const roupaNova = new Roupa (maiorId + 1, this.novaRoupa.nome, this.novaRoupa.preco, this.novaRoupa.tempo);

    this.pecas.push(roupaNova);

    this.campoNovo=false;
  }

}
