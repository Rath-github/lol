import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  usuarioLogado : boolean = false;
  acessoLogin : string = '';
  userEmail : string = '';

  private usuarioLogadoSubject = new BehaviorSubject<boolean>(false);
  usuarioLogado$ = this.usuarioLogadoSubject.asObservable();

  private acessoLoginSub = new BehaviorSubject<any>(false);
  acessoLogin$ = this.acessoLoginSub.asObservable();
  
  private userEmailSubject = new BehaviorSubject<any>(false);
  userEmail$ = this.userEmailSubject.asObservable();

  constructor() { }

  alterarValor(novoValor: boolean) {
    this.usuarioLogadoSubject.next(novoValor);
}

  tipoUsuario(tipo: string){
    this.acessoLoginSub.next(tipo);
  }

  emailUsuario(nome: string){
    this.userEmailSubject.next(nome);
  }
}
