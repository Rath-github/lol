import { Component, OnInit } from '@angular/core';
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
  clientes: Cliente[] = [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao@example.com',
      telefone: '123456789',
      endereco: 'Rua A, 123',
    },
    {
      id: 2,
      nome: 'Maria Santos',
      email: 'maria@example.com',
      telefone: '987654321',
      endereco: 'Rua B, 456',
    },
    // ... mais dados fictícios
  ];

  constructor() {}

  ngOnInit(): void {}

  gerarRelatorio(): void {
    const doc = new jsPDF();
    doc.text('Relatório de Clientes', 10, 10);

    let y = 30; // Posição vertical para começar a adicionar os dados

    for (const cliente of this.clientes) {
      doc.text(`ID: ${cliente.id}`, 10, y);
      doc.text(`Nome: ${cliente.nome}`, 40, y);
      doc.text(`E-mail: ${cliente.email}`, 90, y);
      doc.text(`Telefone: ${cliente.telefone}`, 140, y);
      doc.text(`Endereço: ${cliente.endereco}`, 180, y);

      y += 15; // Aumenta a posição vertical para a próxima linha
    }

    doc.save('relatorio_clientes.pdf');
  }
}