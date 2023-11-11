import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from 'jspdf';



interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})

export class RelatorioClientesComponent  implements OnInit {
  clientes: any[] = [];
  logo : string = '/assets/img/logo.png'

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3333/Clientes').subscribe((cliente) => {
          this.clientes = [...cliente];});
  }

  gerarRelatorio(): void {
    const doc = new jsPDF();

    doc.addImage(this.logo, 'PNG', 10, 0, 50, 50);

    doc.setFont('Georgia');
    doc.setFontSize(26);
    doc.text('Relatório de Clientes', 80, 25);

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

    doc.setFontSize(12);
    doc.text(`Data: ${dataFormatada}`, 93, 31);


    let y = 70; // Posição vertical para começar a adicionar os dados

    doc.setFontSize(13);
    for (const cliente of this.clientes) {
      doc.text(`ID: ${cliente.id}`, 10, y);
      doc.text(`Nome: ${cliente.nome}`, 30, y);
      doc.text(`CPF: ${cliente.cpf}`, 140, y);
      doc.text(`E-mail: ${cliente.email}`, 30, y + 6);
      doc.text(`Telefone: ${cliente.telefone}`, 140, y + 6);
      doc.text(`Endereço: ${cliente.endereco}`, 30, y + 12);

      y += 25; // Aumenta a posição vertical para a próxima linha
    }

    doc.save('relatorio_clientes.pdf');
  }
}