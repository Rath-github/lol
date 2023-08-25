import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacao-lavagem',
  templateUrl: './confirmacao-lavagem.component.html',
  styleUrls: ['./confirmacao-lavagem.component.css']
})
export class ConfirmacaoLavagemComponent {

  pedidos: any[] = [
    { numeroPedido:'123',roupas:'camiseta', orcamento: 50, estado: 'EM ABERTO',prazo:  2 },
    { numeroPedido:'124',roupas:'calça', orcamento: 100, estado: 'EM ABERTO',prazo:  3 },
    { numeroPedido:'125',roupas:'vestido', orcamento: 150, estado: 'AGUARDANDO PAGAMENTO',prazo:  0 },
  ];

  botaoEstado: boolean = false;
  pedidoNum: string = '123';

 
  
  confirmarLavagem(pedidoNum: string){
    const pedido = this.pedidos.find(pedido => pedido.numeroPedido === pedidoNum);
    pedido.estado = "AGUARDANDO PAGAMENTO";
    pedido.prazo = "Lavado em: "+ Date() ;
    
    this.botaoEstado = true;
    console.log(pedido.prazo);
  }

  cancelar(pedidoNum: string){
    const pedido = this.pedidos.find(pedido => pedido.numeroPedido === pedidoNum);
    pedido.estado = "RECOLHIDO";

    this.botaoEstado = false;
  }
}
