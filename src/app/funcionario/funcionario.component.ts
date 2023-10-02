import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
})
export class FuncionarioComponent implements OnInit {
  filtroSelecionado: string = 'aberto';
  dataInicio: string = '';
  dataFim: string = '';

  pedidos: any[] = [
    { numero: '123', estado: 'EM ABERTO', data: new Date() },
    { numero: '124', estado: 'REJEITADO', data: new Date() },
    { numero: '125', estado: 'RECOLHIDO', data: new Date() },
    { numero: '126', estado: 'AGUARDANDO PAGAMENTO', data: new Date() },
    { numero: '127', estado: 'PAGO', data: new Date() },
    { numero: '128', estado: 'FINALIZADO', data: new Date() },
    { numero: '129', estado: 'EM ABERTO', data: new Date() },
  ];

  pedidosFiltrados: any[] = [];
  

  constructor() {}

  ngOnInit(): void {
      this.filtrarPedidos();
    
  }

  filtrarPedidos(): void {
    if (this.filtroSelecionado === 'todos') {
      this.pedidosFiltrados = this.pedidos;
    } 
    else if (this.filtroSelecionado === 'aberto') { 
      this.pedidosFiltrados = this.pedidos.filter(pedido => pedido.estado === 'EM ABERTO').slice();

    }
    else if (this.filtroSelecionado === 'aguardando') { 
      this.pedidosFiltrados = this.pedidos.filter(pedido => pedido.estado === 'AGUARDANDO PAGAMENTO').slice();

    }
    else if (this.filtroSelecionado === 'recolhido') { 
      this.pedidosFiltrados = this.pedidos.filter(pedido => pedido.estado === 'RECOLHIDO').slice();

    }
     else if (this.filtroSelecionado === 'periodo') {
      const dataInicio = new Date(this.dataInicio);
      const dataFim = new Date(this.dataFim);
      this.pedidosFiltrados = this.pedidos.filter(
        (pedido) => pedido.data >= dataInicio && pedido.data <= dataFim
      );
    }
  }

  registrarRecolhimento(numeroPedido: string): void {
    const pedido = this.pedidos.find((p) => p.numero === numeroPedido);
    if (pedido && pedido.estado === 'EM ABERTO') {
      pedido.estado = 'RECOLHIDO';
    }
  }

  confirmarLavagem(numeroPedido: string): void {
    const pedido = this.pedidos.find((p) => p.numero === numeroPedido);
    if (pedido && pedido.estado === 'RECOLHIDO') {
      pedido.estado = 'AGUARDANDO PAGAMENTO';
    }
  }

  finalizarPedido(numeroPedido: string): void {
    const pedido = this.pedidos.find((p) => p.numero === numeroPedido);
    if (pedido && pedido.estado === 'PAGO') {
      pedido.estado = 'FINALIZADO';
    }
  }
}