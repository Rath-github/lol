import { Component } from '@angular/core';
import { EstadosService } from '../services';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent {
 

  constructor(private estados: EstadosService) { }
 
  usuarioLogado: boolean = false;

  ngOnInit(): void {
    this.estados.usuarioLogado$.subscribe((logado) => {
      this.usuarioLogado = logado;
    });
 
}
}
