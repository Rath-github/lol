import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-relatorios',
  templateUrl: './pagina-relatorios.component.html',
  styleUrls: ['./pagina-relatorios.component.css']
})
export class PaginaRelatoriosComponent {
  mostrar : string = '';
  
  relReceitas(){
    if(this.mostrar=== '0'){
      this.mostrar = '1';
    }
    else if(this.mostrar === '1'){
      this.mostrar = '0'
    }
  
   
  }

  relFiel(){
    if(this.mostrar === '0'){
      this.mostrar = '2';
    }
    else if(this.mostrar === '2'){
      this.mostrar = '0'
    }
  }

  relCliente(){
    if(this.mostrar === '0'){
      this.mostrar = '3';
    }
    else if(this.mostrar === '3'){
      this.mostrar = '0'
    }
  }
}
