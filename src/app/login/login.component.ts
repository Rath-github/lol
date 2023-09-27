import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadosService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : string = '';
  senha : string = '';
  loginIncorreto : boolean = false;
  
  

  constructor(private router: Router, private estados: EstadosService) {}

  ngOnInit(): void {
  

}
login(){

 
    if(this.usuario === "user@ufpr.br" && this.senha === "1234"){
      this.estados.alterarValor(true);
      this.router.navigate(['/cliente']);

    
    }
    else{
      this.loginIncorreto = true;
    }
}
}
