import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  pedidosEmAberto: any[] = [
    { numeroPedido: 1, descricao: 'Pedido 1' },
    { numeroPedido: 2, descricao: 'Pedido 2' },

    // Add more sample data here or fetch data from the backend.
  ];

  constructor(private router: Router) {}

  irParaPedido() {
    // Navega para a página de pedido
    this.router.navigate(['/pedido']);
  }
}
