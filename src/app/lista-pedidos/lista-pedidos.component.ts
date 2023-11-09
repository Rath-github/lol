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
    
    this.http.get<any[]>('http://localhost:3333/pedidos').subscribe((pedidos) => {
      if (pedidos && this.usuario) {
        this.pedidos = pedidos.filter((pedido) => pedido.pedidoCliente === this.usuario);
      }
    });
  }


  filtrarPorEstado(): any[] {
    if (this.estadoFiltro == '') {
      return this.pedidos;
    } else {
      return this.pedidos.filter(pedido => pedido.pedidoEstado === this.estadoFiltro);
    }
  }

  ordenarPorDataDecrescente(pedidos: any[]): any[] {
    return pedidos.sort((a, b) => b.data - a.data);
  }

  cancelarPedido(pedidoId: string): void {
    const pedidoEncontrado = this.pedidos.find(
      (pedido) => pedido.id === pedidoId 
    );

    if (pedidoEncontrado && pedidoEncontrado.pedidoEstado != 'RECOLHIDO') {   
        pedidoEncontrado.pedidoEstado = 'CANCELADO';

        this.http.put(`http://localhost:3333/pedidos/${pedidoId}`, pedidoEncontrado).subscribe(() => {
        
        console.log(`Pedido ${pedidoId} foi cancelado no servidor.`);

        });
    }
  }

  pagarPedido(pedidoId: string): void {
    const pedidoEncontrado = this.pedidos.find(
      (pedido) => pedido.id === pedidoId 
    );

    if (pedidoEncontrado && pedidoEncontrado.pedidoEstado == 'AGUARDANDO PAGAMENTO') {
      pedidoEncontrado.pedidoEstado = 'PAGO';

      this.http.put(`http://localhost:3333/pedidos/${pedidoId}`, pedidoEncontrado).subscribe(() => {
      });

      alert(`Pedido ${pedidoId} pago com sucesso!`);
    }
    else if(pedidoEncontrado.pedidoEstado == 'PAGO'){
      alert(`O pedido ja foi pago!`); 
    }
    else{
      alert(`Aguarde a conclusão do pedido!`); 
    }
    
  }
}