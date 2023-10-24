import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css'],
})
export class ConsultarPedidoComponent {
  roupas: string = '';
  orcamento: number = 0;
  prazo: number = 0;
  estado: string = '';
  id: string = ''; // Mantém o número do pedido que o usuário digita
  idPedido: string = ''; // Armazena o id do pedido após a busca

  exibirPedido: boolean = false;
  naoEncontrado: boolean = false;

  constructor(private http: HttpClient) {}

  buscarPedido() {
    this.http.get<any>(`http://localhost:3333/pedidos/${this.id}`).subscribe(
      (pedidoEncontrado) => {
        this.roupas = pedidoEncontrado.roupas;
        this.orcamento = pedidoEncontrado.orcamento;
        this.prazo = pedidoEncontrado.prazo;
        this.estado = pedidoEncontrado.estado;
        this.idPedido = pedidoEncontrado.id; // Use idPedido para armazenar o id do pedido

        this.naoEncontrado = false;
        this.exibirPedido = true;
      },
      (error) => {
        // Pedido não encontrado
        this.exibirPedido = false;
        this.naoEncontrado = true;
      }
    );
  }
}

