import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

interface ClienteFiel {
  nome: string;
  email: string;
  totalCompras: any;
}

@Component({
  selector: 'app-relatorio-clientes-fieis',
  templateUrl: './relatorio-clientes-fieis.component.html',
  styleUrls: ['./relatorio-clientes-fieis.component.css'],
})
export class RelatorioClientesFieisComponent implements OnInit {
  clientesFieis: ClienteFiel[] = [
    { nome: 'Elaine', email: 'elaine@email.com', totalCompras: 1340 },
    { nome: 'Julio', email: 'julio@email.com', totalCompras: 854 },
    { nome: 'Roberta', email: 'roberta@email.com', totalCompras: 765 },
    { nome: 'Judit', email: 'judit@email.com', totalCompras: 742 },
    { nome: 'Flavia', email: 'flavia@email.com', totalCompras: 986 },
    
  ];

  constructor() {}

  ngOnInit(): void {}

  gerarRelatorio(): void {
    const doc = new jsPDF();
    doc.text('Relatório de Clientes Fiéis', 10, 10);

    let y = 30; 

    for (const clienteFiel of this.clientesFieis) {
      doc.text(`Nome: ${clienteFiel.nome}`, 10, y);
      doc.text(`Email: ${clienteFiel.email}`, 60, y);
      doc.text(`Total Gasto: R$ ${clienteFiel.totalCompras.toFixed(2)}`, 140, y);

      y += 20; 
    }

    doc.save('relatorio_clientes_fieis.pdf');
  }
}