import { Component } from '@angular/core';

@Component({
  selector: 'app-cancelar-pedido',
  templateUrl: './cancelar-pedido.component.html',
  styleUrls: ['./cancelar-pedido.component.css']
})
export class CancelarPedidoComponent {
  pedidos: any[] = [
    { numeroPedido: '123', roupas: 'camiseta', orcamento: 50, estado: 'EM ABERTO', prazo: 2 },
    { numeroPedido: '124', roupas: 'calça', orcamento: 100, estado: 'EM ABERTO', prazo: 3 },
    { numeroPedido: '125', roupas: 'vestido', orcamento: 150, estado: 'PRONTO', prazo: 0 },
  ];

  naoEncontrado: boolean = false;

 
  cancelarPedido() {
  
    this.naoEncontrado = true;
  }
}