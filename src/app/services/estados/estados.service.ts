import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  usuarioLogado : boolean = false;

  private usuarioLogadoSubject = new BehaviorSubject<boolean>(false);
  usuarioLogado$ = this.usuarioLogadoSubject.asObservable();

  constructor() { }

  alterarValor(novoValor: boolean) {
    this.usuarioLogadoSubject.next(novoValor);
}}
