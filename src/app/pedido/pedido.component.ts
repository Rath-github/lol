import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent {
  roupas: string = '';
  orcamento: number = 0;
  prazo: number = 0;
  pedidoAprovado: boolean = false;
  pedidoRejeitado: boolean = false; // Adicionamos uma propriedade para controlar se o pedido foi rejeitado
  numeroPedido: string = '';

  fazerPedido() {
    // Simule um serviço para calcular o orçamento e o prazo
    // Aqui você pode implementar a lógica real para calcular o orçamento e o prazo
    this.orcamento = 50; // Exemplo de valor do orçamento (substitua pela lógica real)
    this.prazo = 3; // Exemplo de prazo em dias (substitua pela lógica real)

    const roupasArray = this.roupas.split(',').map((roupa) => roupa.trim());
    const roupaMaisDemorada = roupasArray.reduce((maisDemorada, roupa) => {
      const tempoLavagem = this.obterTempoLavagem(roupa);
      return tempoLavagem > maisDemorada ? tempoLavagem : maisDemorada;
    }, 0);

    this.prazo = roupaMaisDemorada; // O prazo será o tempo de lavagem da roupa mais demorada
  }

  aprovarPedido() {
    // Simule um serviço para gerar o número de pedido
    // Aqui você pode implementar a lógica real para gerar o número de pedido
    this.numeroPedido = '123456'; // Exemplo de número de pedido (substitua pela lógica real)

    this.pedidoAprovado = true;
  }

  rejeitarPedido() {
    this.pedidoRejeitado = true; // Marcar o pedido como rejeitado
  }

  obterTempoLavagem(roupa: string): number {
    // Aqui você pode implementar a lógica real para obter o tempo de lavagem de cada tipo de roupa
    // Por exemplo, pode ser uma consulta a um banco de dados, ou um cálculo com base em regras de negócio
    // Por enquanto, vamos simular retornando um tempo fixo para cada roupa
    switch (roupa.toLowerCase()) {
      case 'camiseta':
        return 2; // Tempo de lavagem da camiseta em dias
      case 'calça':
        return 3; // Tempo de lavagem da calça em dias
      case 'vestido':
        return 4; // Tempo de lavagem do vestido em dias
      default:
        return 1; // Tempo de lavagem padrão em dias
    }
  }
}