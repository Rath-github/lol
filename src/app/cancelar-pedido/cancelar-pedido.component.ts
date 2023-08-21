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

<<<<<<< HEAD
 
  cancelarPedido() {
  
    this.naoEncontrado = true;
  }
}
=======
  // Função para cancelar o pedido
  cancelarPedido() {
    // Implemente a lógica para cancelar o pedido aqui
    // Por exemplo, você pode remover o pedido da lista de pedidos ou atualizar o estado do pedido
    // Certifique-se de implementar essa lógica de acordo com os requisitos do seu aplicativo
    
    // Exibir a mensagem de pedido cancelado
    this.naoEncontrado = true;
  }
}
>>>>>>> 41b4e087f084457ba5258b1f29174c7653508845
