import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css'],
})
export class ConsultarPedidoComponent {
  pedidos: any[] = [];
  pedidoEncontrado: any;
  roupas : { tipo: string, quantidade: number,tempo: number, preco: number  }[] = [];
  orcamento: number = 0;
  prazo: number = 0;
  estado: string = '';
  pedidoNum: string = ''; // Mantém o número do pedido que o usuário digita
 

  exibirPedido: boolean = false;
  naoEncontrado: boolean = false;

  constructor(private http: HttpClient) {}

  buscarPedido() {
   
    this.http.get<any[]>('http://localhost:3333/pedidos').subscribe((pedidos) => { 
        const pedidosN = [...pedidos];

        const pedidoEncontrado = pedidosN.find(pedido => pedido.pedidoNum == this.pedidoNum);
        this.pedidoEncontrado = pedidoEncontrado;
       
      
        if(this.pedidoEncontrado){
          this.roupas = this.pedidoEncontrado.pedidoRoupas;
          this.orcamento = this.pedidoEncontrado.pedidoOrcamento;
          this.prazo = this.pedidoEncontrado.pedidoPrazo;
          this.estado = this.pedidoEncontrado.pedidoEstado;
          
          this.naoEncontrado = false;
          this.exibirPedido = true;
        }
        else{  // Pedido não encontrado
          this.exibirPedido = false;
          this.naoEncontrado = true;
        };
    });
  }
}