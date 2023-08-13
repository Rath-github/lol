import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : string = '';
  senha : string = '';
  loginIncorreto : boolean = false;

  constructor(){}

  ngOnInit(): void {
  
  
}
login(){
    if(this.usuario === "user@ufpr.br" && this.senha === "1234"){

    }
    else{
      this.loginIncorreto = true;
    }
}
}
