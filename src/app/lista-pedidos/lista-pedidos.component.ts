import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadosService } from '../services';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  pedidos: any[] = [];
  estadoFiltro: string = '';
  usuario: string = '';
  tipoUsuario: string = '';

  constructor(private estados: EstadosService, private http: HttpClient) { }

  ngOnInit(): void {
    this.estados.acessoLogin$.subscribe((tipo) => {
      this.tipoUsuario = tipo; 
    }),
    this.estados.userEmail$.subscribe((userEmail) =>{
      this.usuario = userEmail;
    }
    );

    // Carregar a lista de pedidos do servidor JSON-Server
    this.http.get<any[]>('http://localhost:3333/pedidos').subscribe((pedidos) => {
      if (pedidos && this.usuario) {
        this.pedidos = pedidos.filter((pedido) => pedido.pedidoCliente === this.usuario);
      }
    });
  }

  filtrarPorEstado(): any[] {
    if (this.estadoFiltro === '') {
      return this.pedidos;
    } else {
      return this.pedidos.filter(pedido => pedido.pedidoEstado === this.estadoFiltro);
    }
  }

  ordenarPorDataDecrescente(pedidos: any[]): any[] {
    return pedidos.sort((a, b) => b.data - a.data);
  }

  cancelarPedido(numeroPedido: string): void {
    // Implemente a lógica para cancelar o pedido no servidor aqui
    // Por enquanto, apenas marcamos o pedido como 'CANCELADO' localmente
    const pedido = this.pedidos.find(p => p.numero === numeroPedido);
    if (pedido) {
      pedido.estado = 'CANCELADO';

      // Atualize o pedido no servidor JSON-Server
      this.http.put(`http://localhost:3333/pedidos/${pedido.id}`, pedido).subscribe(() => {
        console.log(`Pedido ${numeroPedido} foi cancelado no servidor.`);
      });
    }
  }

  pagarPedido(numeroPedido: string): void {
    // Implemente a lógica para pagar o pedido no servidor aqui
    // Por enquanto, apenas exibimos um alerta
    alert(`Pedido ${numeroPedido} pago com sucesso!`);
  }
}
