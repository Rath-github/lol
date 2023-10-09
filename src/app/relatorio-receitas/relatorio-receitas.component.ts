import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf'; 

interface Receita {
  data: string;
  valor: number;
}


@Component({
  selector: 'app-relatorio-receitas',
  templateUrl: './relatorio-receitas.component.html',
  styleUrls: ['./relatorio-receitas.component.css']
})
export class RelatorioReceitasComponent implements OnInit {
  receitas: Receita[] = [
    { data: '2023-08-01', valor: 150 },
    { data: '2023-08-02', valor: 200 },
    { data: '2023-08-03', valor: 180 },
  
  ];

  constructor() {}

  ngOnInit(): void {}

  gerarRelatorio(): void {
    const doc = new jsPDF();
    doc.text('Relatório de Receitas', 10, 10);

    let y = 30; 

    for (const receita of this.receitas) {
      doc.text(`Data: ${receita.data}`, 10, y);
      doc.text(`Valor: R$ ${receita.valor.toFixed(2)}`, 60, y);

      y += 10; 
    }

    doc.save('relatorio_receitas.pdf');
  }
}