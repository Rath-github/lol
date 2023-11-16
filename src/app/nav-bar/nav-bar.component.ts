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
  tipoUsuario: string = '';
  userEmail : string = '';

  ngOnInit(): void {
    this.estados.usuarioLogado$.subscribe((logado) => {
      this.usuarioLogado = logado;
    });

    this.estados.acessoLogin$.subscribe((tipo) =>{
      this.tipoUsuario = tipo;
    })

    this.estados.userEmail$.subscribe((userEmail) =>{
      this.userEmail = userEmail;
    })
 
}
}