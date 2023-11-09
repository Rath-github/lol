import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
})
export class FuncionarioComponent implements OnInit {
  filtroSelecionado: string = 'aberto';
  dataInicio: string = '';
  dataFim: string = '';
  pedidosAbertosNaoRecolhidos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.filtrarPedidosAbertosNaoRecolhidos();
  }

  filtrarPedidosAbertosNaoRecolhidos(): void {
    this.http.get<any[]>('http://localhost:3333/pedidos').subscribe((pedidos) => {
      this.pedidosAbertosNaoRecolhidos = pedidos.filter(
        (pedido) => pedido.pedidoEstado === 'EM ABERTO' && !pedido.pedidoRecolhido
      );
    });
  }

  registrarRecolhimento(pedido: any): void {
    pedido.pedidoEstado = 'RECOLHIDO';
    pedido.pedidoRecolhido = true;

    this.http.put(`http://localhost:3333/pedidos/${pedido.id}`, pedido).subscribe(
      () => {
        // Pedido atualizado com sucesso
      },
      (error) => {
        // Tratar erros, se necessário
      }
    );
  }

  formatarData(dia: number, mes: number, ano: number, hora: number): string {
    const data = new Date(ano, mes - 1, dia, hora);
    return data.toLocaleString();
  }
}
