import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-pagamento',
  templateUrl: './confirmar-pagamento.component.html',
  styleUrls: ['./confirmar-pagamento.component.css'],
})
export class ConfirmarPagamentoComponent implements OnInit {
  numeroPedido: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.numeroPedido = params['numero'];
    });
  }

  confirmarPagamento(): void {
    alert(`Pagamento do Pedido ${this.numeroPedido} confirmado com sucesso!`);
    this.router.navigate(['/lista-pedidos']);
  }
}