import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Roupa } from '../roupas/roupaModelo/roupa.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  
  pedidos: any[] = [
    { numeroPedido:'123',roupas:'camiseta', orcamento: 50, estado: 'EM ABERTO',prazo:  2 },
    { numeroPedido:'124',roupas:'calça', orcamento: 100, estado: 'EM ABERTO',prazo:  3 },
    { numeroPedido:'125',roupas:'vestido', orcamento: 150, estado: 'PRONTO',prazo:  0 },
  ];

  pecas: Roupa[]=[
    new Roupa(1,'camisa',50,2),
    new Roupa(2,'calca',100,3),
    new Roupa(3,'vestido',150,4)];
  
  exibirListarPedido = false;
  valores: boolean = false;

  constructor(private router: Router) {}

  irParaPedido() {
    // Navega para a página de pedido
    this.router.navigate(['/pedido']);
  }

  listarPedidos(){
    //lista os pedidos do cliente
    this.exibirListarPedido = true;

  }
  alternarValor() {
    this.valores = !this.valores;
  }
}
