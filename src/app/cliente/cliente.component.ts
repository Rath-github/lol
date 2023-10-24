import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Roupa } from '../roupas/roupaModelo/roupa.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  pedidos: any[] = [];
  pecas: Roupa[] = [];
  exibirListarPedido = true; // Define como true para mostrar a lista de pedidos imediatamente
  valores: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.carregarPedidosEmAberto();
  }

  carregarPedidosEmAberto() {
    // Faça uma solicitação GET à sua API para buscar os pedidos em aberto
    this.http.get<any[]>('http://localhost:3333/pedidos').subscribe((data) => {
      // Filtra os pedidos com estado "EM ABERTO"
      this.pedidos = data.filter((pedido) => pedido.estado === 'EM ABERTO');
    });
  }

  irParaPedido() {
    // Navega para a página de pedido
    this.router.navigate(['/pedido']);
  }

  alternarValor() {
    this.valores = !this.valores;
  }
}
