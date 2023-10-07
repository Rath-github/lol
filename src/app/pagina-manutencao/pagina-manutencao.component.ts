import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-manutencao',
  templateUrl: './pagina-manutencao.component.html',
  styleUrls: ['./pagina-manutencao.component.css']
})
export class PaginaManutencaoComponent {
  mostraMan : string = '0';
  manutRoupas : boolean = false;

  funcioMan(){
    if(this.mostraMan=== '0'){
      this.mostraMan = '1';
    }
    else if(this.mostraMan=== '1'){
      this.mostraMan = '0'
    }
  
   
  }

  roupasMan(){
    if(this.mostraMan=== '0'){
      this.mostraMan = '2';
    }
    else if(this.mostraMan=== '2'){
      this.mostraMan = '0'
    }
  }

}
