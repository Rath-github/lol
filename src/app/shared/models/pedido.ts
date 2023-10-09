
export class Pedido {

    pedidoNum : number = 0;
    pedidoCliente : string = '';
    pedidoRoupas : { tipo: string, quantidade: number,prazo: number, preco: number  }[] = [];
    pedidoOrcamento : number = 0;
    pedidoPrazo : number = 0;
    pedidoHora : number = 0;
    pedidoDia : number = 0;
    pedidoMes : number = 0;
    pedidoAno : number = 0;
    pedidoEstado : string = '';

}
