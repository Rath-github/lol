import { Component } from '@angular/core';

@Component({
  selector: 'app-finalizar-pedido', // Atualizado o nome do seletor para o componente de finalização
  templateUrl: './finalizacao-pedido.component.html', // Atualizado o nome do arquivo HTML correspondente
  styleUrls: ['./finalizacao-pedido.component.css'] // Atualizado o nome do arquivo CSS correspondente
})
export class FinalizarPedidoComponent { // Atualizado o nome da classe do componente
  pedidos: any[] = [
    { numeroPedido: '123', roupas: 'camiseta', orcamento: 50, estado: 'EM ABERTO', prazo: 2 },
    { numeroPedido: '124', roupas: 'calça', orcamento: 100, estado: 'EM ABERTO', prazo: 3 },
    { numeroPedido: '125', roupas: 'vestido', orcamento: 150, estado: 'PRONTO', prazo: 0 },
  ];

  naoEncontrado: boolean = false;
  pedidoFinalizado: boolean = false; // Atualizado o nome da variável

  finalizarPedido() { // Atualizado o nome do método
    const numeroPedido = (<HTMLInputElement>document.getElementById('numeroPedido')).value;
    const pedidoIndex = this.pedidos.findIndex(pedido => pedido.numeroPedido === numeroPedido);

    if (pedidoIndex !== -1) {
      this.pedidos[pedidoIndex].estado = 'FINALIZADO'; // Atualizado para 'FINALIZADO'
      this.pedidos[pedidoIndex].prazo = 0;
      this.naoEncontrado = false;
      this.pedidoFinalizado = true; // Atualizado o nome da variável
    } else {
      this.naoEncontrado = true;
      this.pedidoFinalizado = false; // Atualizado o nome da variável
    }
  }
}