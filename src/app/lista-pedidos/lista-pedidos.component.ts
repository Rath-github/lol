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
  pedidoEncontrado : any ;
  janelaPagar : boolean = false;
  btPago : boolean = false;
  janelaAlert : boolean = false;
  textAlert: string = '';

  constructor(private estados: EstadosService, private http: HttpClient) { }

  ngOnInit(): void {
    this.estados.acessoLogin$.subscribe((tipo) => {
      this.tipoUsuario = tipo; 
    });

    this.estados.userEmail$.subscribe((userEmail) => {
      this.usuario = userEmail;
      this.carregarPedidos();
    });
  }

  carregarPedidos(): void {
    this.http.get<any[]>('http://localhost:3333/pedidos').subscribe((pedidos) => {
      if (pedidos && this.usuario) {
        if (this.tipoUsuario === 'cliente') {
          this.pedidos = pedidos.filter((pedido) => pedido.pedidoCliente === this.usuario);
        } else if (this.tipoUsuario === 'funcionario') {
          this.pedidos = pedidos;
        }
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

  cancelarPedido(pedidoId: string): void {
    const pedidoEncontrado = this.pedidos.find((pedido) => pedido.id === pedidoId);

    if (pedidoEncontrado && pedidoEncontrado.pedidoEstado !== 'RECOLHIDO') {
      pedidoEncontrado.pedidoEstado = 'CANCELADO';

      this.http.put(`http://localhost:3333/pedidos/${pedidoId}`, pedidoEncontrado).subscribe(() => {
        console.log(`Pedido ${pedidoId} foi cancelado no servidor.`);
        this.carregarPedidos(); // Atualiza a lista após o cancelamento
      });
    }
  }

  pagarPedido(pedidoId: string): void {
   
      this.pedidoEncontrado.pedidoEstado = 'PAGO';

      this.http.put(`http://localhost:3333/pedidos/${pedidoId}`, this.pedidoEncontrado).subscribe(() => {
        console.log(`Pedido ${pedidoId} foi pago no servidor.`);
        this.textAlert = 'pedido pago com sucesso!'
        this.btPago = true ; 
        this.carregarPedidos(); // Atualiza a lista após o pagamento
      });  
  }
 

  mostrarJanelaPagar(pedidoId: string){
    this.pedidoEncontrado = this.pedidos.find((pedido) => pedido.id === pedidoId);
    
    switch (this.pedidoEncontrado?.pedidoEstado) {
      case 'AGUARDANDO PAGAMENTO':
        this.janelaPagar = true;
        this.janelaAlert = false;
        this.textAlert = "";
        break;
      
      case 'PAGO':
        this.janelaPagar = false;
        this.janelaAlert = true;
        this.textAlert = "O pedido numero: " + this.pedidoEncontrado.pedidoNum + " já foi pago!";
        break;
      case 'REJEITADO':
        this.janelaPagar = false;
        this.janelaAlert = true;
        this.textAlert = "O pedido numero: " + this.pedidoEncontrado.pedidoNum + " está rejeitado!";
        break;
      case 'CANCELADO':
        this.janelaPagar = false;
        this.janelaAlert = true;
        this.textAlert = "O pedido numero: " + this.pedidoEncontrado.pedidoNum + " está cancelado!";
      break;
      case 'FINALIZADO':
        this.janelaPagar = false;
        this.janelaAlert = true;
        this.textAlert = "O pedido numero: " + this.pedidoEncontrado.pedidoNum + " já foi finalizado!";
        break;
    
      default:
        this.janelaPagar = false;
        this.janelaAlert = true;
        this.textAlert = "Antes de pagar Aguarde a conclusão do pedido!";

    }
  
  }

}