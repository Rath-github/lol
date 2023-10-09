import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../services';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  pedidos: any[] = [
    { numero: '123', estado: 'EM ABERTO', data: new Date() },
    { numero: '124', estado: 'REJEITADO', data: new Date() },
    { numero: '125', estado: 'APROVADO', data: new Date() }
  ];

  estadoFiltro: string = '';
  

  constructor(private estados: EstadosService) { }

  tipoUsuario: string = '';

  ngOnInit(): void {
    this.estados.acessoLogin$.subscribe((tipo) =>{
      this.tipoUsuario = tipo;})

  }

  filtrarPorEstado(): any[] {
    if (this.estadoFiltro === '') {
      return this.pedidos;
    } else {
      return this.pedidos.filter(pedido => pedido.estado === this.estadoFiltro);
    }
  }

  ordenarPorDataDecrescente(pedidos: any[]): any[] {
    return pedidos.sort((a, b) => b.data - a.data);
  }

  cancelarPedido(numeroPedido: string): void {
    // Implemente a lógica para cancelar o pedido aqui
    // Por enquanto, apenas marcamos o pedido como 'CANCELADO'
    const pedido = this.pedidos.find(p => p.numero === numeroPedido);
    if (pedido) {
      pedido.estado = 'CANCELADO';
    }
  }

  pagarPedido(numeroPedido: string): void {
    alert(`Pedido ${numeroPedido} pago com sucesso!`);
  }
}
