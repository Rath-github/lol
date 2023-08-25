import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.css'],
})
export class ConsultaPedidoComponent implements OnInit {
  numeroPedido: string = '';
  pedidoEncontrado: any = null;

  pedidos: any[] = [
    {
      numero: '123',
      estado: 'EM ABERTO',
      roupas: ['Camiseta', 'Calça'],
      orcamento: 100,
      prazo: 3,
    },
    {
      numero: '124',
      estado: 'REJEITADO',
      roupas: ['Vestido'],
      orcamento: 50,
      prazo: 2,
    },
    {
      numero: '125',
      estado: 'APROVADO',
      roupas: ['Camiseta', 'Calça', 'Vestido'],
      orcamento: 150,
      prazo: 4,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  consultarPedido(): void {
    this.pedidoEncontrado = this.pedidos.find(
      (pedido) => pedido.numero === this.numeroPedido
    );
  }
}
