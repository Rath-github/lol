import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from 'jspdf';

interface Pedido {
  pedidoNum: number;
  pedidoCliente: string;
  pedidoOrcamento: number;
}

@Component({
  selector: 'app-relatorio-clientes-fieis',
  templateUrl: './relatorio-clientes-fieis.component.html',
  styleUrls: ['./relatorio-clientes-fieis.component.css'],
})
export class RelatorioClientesFieisComponent implements OnInit {
  pedidos: Pedido[] = [];
  logo: string = '/assets/img/logo.png';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3333/pedidos').subscribe(
      (data) => {
        console.log('Dados de pedidos:', data);
        if (data && Array.isArray(data)) {
          this.pedidos = data;
          console.log('Pedidos:', this.pedidos);
          this.gerarRelatorio(); // Chamando a geração do relatório após receber os dados
        } else {
          console.error('Dados inválidos de pedidos:', data);
        }
      },
      (error) => {
        console.error('Erro ao buscar dados de pedidos:', error);
      }
    );
  }

  gerarRelatorio(): void {
    console.log('Gerando relatório com pedidos:', this.pedidos);
    const doc = new jsPDF();

    doc.addImage(this.logo, 'PNG', 10, 0, 50, 50);

    doc.setFont('Georgia');
    doc.setFontSize(26);
    doc.text('Relatório de Clientes Fieis', 80, 25);

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

    doc.setFontSize(12);
    doc.text(`Data: ${dataFormatada}`, 93, 31);

    let y = 70; // Posição vertical para começar a adicionar os dados

    doc.setFontSize(13);

    const clientesCompras: { [key: string]: { totalCompras: number; quantidadePedidos: number } } = {};

    for (const pedido of this.pedidos) {
      if (!clientesCompras[pedido.pedidoCliente]) {
        clientesCompras[pedido.pedidoCliente] = { totalCompras: 0, quantidadePedidos: 0 };
      }
      clientesCompras[pedido.pedidoCliente].totalCompras += pedido.pedidoOrcamento;
      clientesCompras[pedido.pedidoCliente].quantidadePedidos++;
    }

    const clientesOrdenados = Object.keys(clientesCompras)
      .sort((a, b) => clientesCompras[b].totalCompras - clientesCompras[a].totalCompras)
      .slice(0, 3);

    for (const clienteId of clientesOrdenados) {
      if (y > 250) {
        doc.addPage();
        y = 20;
      }

      doc.text(`Cliente: ${clienteId}`, 10, y);
      doc.text(`Total Gasto: R$ ${clientesCompras[clienteId].totalCompras.toFixed(2)}`, 10, y + 10);
      doc.text(`Quantidade de Pedidos: ${clientesCompras[clienteId].quantidadePedidos}`, 10, y + 20);

      y += 40; // Ajustar a posição vertical
    }

    doc.save('relatorio_clientes_fieis.pdf');
  }
}
