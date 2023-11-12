import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
})
export class FuncionarioComponent implements OnInit {
  filtroSelecionado: string = 'todos';
  dataInicio: string = '';
  dataFim: string = '';
  pedidos: any[] = [];
  perfil: string = 'funcionario'; // Defina o perfil atual
  pedidosAbertosNaoRecolhidos: any[] = [];
  pedidosFiltrados: any[] = []; // Adicione esta linha
  pedidosOriginais: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarPedidos();
    
  }

  carregarPedidos(): void {
    this.http.get<any[]>('http://localhost:3333/pedidos').subscribe((pedidos) => {
      this.pedidosOriginais = pedidos;
      this.filtrarPedidos();
    });
  }

  filtrarPedidos(): void {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zerar horas, minutos, segundos e milissegundos

    if (this.filtroSelecionado === 'todos') {
      this.pedidos = this.pedidosOriginais;
    } else if (this.filtroSelecionado === 'hoje') {
      this.pedidos = this.pedidosOriginais.filter(pedido =>
        new Date(pedido.pedidoAno, pedido.pedidoMes - 1, pedido.pedidoDia) >= hoje
      );
    } else if (this.filtroSelecionado === 'periodo') {
      const dataInicio = new Date(this.dataInicio);
      const dataFim = new Date(this.dataFim);
      dataFim.setHours(23, 59, 59, 999); // Configurar para o final do dia

      this.pedidos = this.pedidosOriginais.filter(pedido =>
        new Date(pedido.pedidoAno, pedido.pedidoMes - 1, pedido.pedidoDia) >= dataInicio &&
        new Date(pedido.pedidoAno, pedido.pedidoMes - 1, pedido.pedidoDia) <= dataFim
      );
    }
  }


  registrarRecolhimento(pedido: any): void {
    // Verificar se o pedido está em um estado adequado para recolhimento
    if (pedido.pedidoEstado === 'EM ABERTO') {
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
  }

  confirmarLavagem(pedido: any): void {
    // Verificar se o pedido está em um estado adequado para confirmação de lavagem
    if (pedido.pedidoEstado === 'RECOLHIDO') {
      pedido.pedidoEstado = 'AGUARDANDO PAGAMENTO';

      this.http.put(`http://localhost:3333/pedidos/${pedido.id}`, pedido).subscribe(
        () => {
          // Pedido atualizado com sucesso
        },
        (error) => {
          // Tratar erros, se necessário
        }
      );
    }
  }

  finalizarPedido(pedido: any): void {
    // Verificar se o pedido está em um estado adequado para finalização
    if (pedido.pedidoEstado === 'PAGO') {
      pedido.pedidoEstado = 'FINALIZADO';

      this.http.put(`http://localhost:3333/pedidos/${pedido.id}`, pedido).subscribe(
        () => {
          // Pedido atualizado com sucesso
        },
        (error) => {
          // Tratar erros, se necessário
        }
      );
    }
  }

  formatarData(dia: number, mes: number, ano: number, hora: number): string {
    const data = new Date(ano, mes - 1, dia, hora);
    return data.toLocaleString();
  }
}
