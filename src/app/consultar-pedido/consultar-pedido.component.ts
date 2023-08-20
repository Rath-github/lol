import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css']
})
export class ConsultarPedidoComponent {
  roupas: string = '';
  orcamento: number = 0;
  prazo: number = 0;
  estado: string=''; 
  numeroPedido: string = '';

  
  
  pedidos: any[] = [
    { numeroPedido:'123',roupas:'camiseta', orcamento: 50, estado: 'EM ABERTO',prazo:  2 },
    { numeroPedido:'124',roupas:'calça', orcamento: 100, estado: 'EM ABERTO',prazo:  3 },
    { numeroPedido:'125',roupas:'vestido', orcamento: 150, estado: 'PRONTO',prazo:  0 },
  ];
  
  
  pedidoNum : string = '';
  exibirPedido : boolean = false;
  naoEncontrado : boolean = false;

  buscarPedido(){
    const pedidoEncontrado = this.pedidos.find(pedido => pedido.numeroPedido === this.pedidoNum);

    if (pedidoEncontrado){
      this.roupas = pedidoEncontrado.roupas;
      this.orcamento = pedidoEncontrado.orcamento;
      this.prazo = pedidoEncontrado.prazo;
      this.estado = pedidoEncontrado.estado;
      this.numeroPedido = pedidoEncontrado.numeroPedido;

      this.naoEncontrado = false;
      this.exibirPedido = true;
      

    } 
    else {
      //pedido nao encontrado
      this.exibirPedido = false;
      this.naoEncontrado = true;

     }
    }

  }
  







