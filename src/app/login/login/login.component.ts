import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : string = '';
  senha : string = '';
  loginIncorreto : boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
  
  
}
login(){
    if(this.usuario === "user@ufpr.br" && this.senha === "1234"){
      this.router.navigate(['/cliente']);
    }
    else{
      this.loginIncorreto = true;
    }
}
}
