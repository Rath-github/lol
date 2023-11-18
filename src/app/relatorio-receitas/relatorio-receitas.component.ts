import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from 'jspdf';

interface Receita {
  pedidoNum: number;
  pedidoPrazo: string;
  pedidoOrcamento: string;
  pedidoDia: number;
  pedidoMes: number;
  pedidoAno: number;
  pedidoRecolhido: boolean;
  pedidoRoupas: { tipo: string; quantidade: number; tempo: number; preco: number }[];
}

@Component({
  selector: 'app-relatorio-receitas',
  templateUrl: './relatorio-receitas.component.html',
  styleUrls: ['./relatorio-receitas.component.css']
})
export class RelatorioReceitasComponent implements OnInit {
  receitas: Receita[] = [];
  logo: string = '/assets/img/logo.png';
  dataInicio: string = ''; // Data inicial do filtro
  dataFim: string = ''; // Data final do filtro

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarReceitas();
  }

  carregarReceitas(): void {
    this.http.get<any[]>('http://localhost:3333/pedidos').subscribe((data) => {
      this.receitas = [...data];
    });
  }

  filtrarPorData(): Receita[] {
    let receitasFiltradas: Receita[] = [...this.receitas];

    if (this.dataInicio && this.dataFim) {
      const inicio = new Date(this.dataInicio);
      const fim = new Date(this.dataFim);

      receitasFiltradas = receitasFiltradas.filter((receita) => {
        const receitaData = new Date(
          receita.pedidoAno,
          receita.pedidoMes - 1,
          receita.pedidoDia
        );
        return receitaData >= inicio && receitaData <= fim;
      });
    }

    return receitasFiltradas;
  }

  gerarRelatorio(): void {
    const receitasFiltradas = this.filtrarPorData();

    const doc = new jsPDF();

    doc.addImage(this.logo, 'PNG', 10, 0, 50, 50);

    doc.setFont('Georgia');
    doc.setFontSize(26);
    doc.text('Relatório de Receitas', 80, 25);

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

    doc.setFontSize(12);
    doc.text(`Data: ${dataFormatada}`, 93, 31);

    // Agrupar por dia
    const receitasAgrupadas = this.agruparPorDia(receitasFiltradas);

    let y = 70; // Posição vertical para começar a adicionar os dados

    doc.setFontSize(13);
    for (const [data, receitasPorDia] of receitasAgrupadas) {
      if (y > 250) {
        doc.addPage(); // Adiciona uma nova página se a altura exceder 250
        y = 20; // Reinicia a posição vertical
      }

      doc.setFont('Arial', 'bold');
      doc.setFontSize(16);
      doc.text(`Receita do dia: ${data}`, 14, y);

      y += 10; // Incremento da posição vertical

      // Detalhes dos pedidos para o dia
      receitasPorDia.forEach((receita: Receita) => {
        doc.setFont('Arial', 'normal');
        doc.setFontSize(12);
        doc.text(`Pedido Número: ${receita.pedidoNum}`, 14, y);
        doc.text(`Prazo: ${receita.pedidoPrazo}`, 14, y + 7);
        doc.text(`Orçamento: ${receita.pedidoOrcamento}`, 14, y + 14);
        // Adicionar mais detalhes conforme necessário

        y += 25; // Incremento da posição vertical para o próximo pedido
      });

      y += 10; // Espaço entre dias
    }

    doc.save('relatorio_receitas.pdf');
  }

  agruparPorDia(receitas: Receita[]): Map<string, Receita[]> {
    return receitas.reduce((acc: Map<string, Receita[]>, receita: Receita) => {
      const data = `${receita.pedidoDia}/${receita.pedidoMes}/${receita.pedidoAno}`;
      acc.set(data, (acc.get(data) || []).concat(receita));
      return acc;
    }, new Map<string, Receita[]>());
  }
}
