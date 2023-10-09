import { Component } from '@angular/core';
import { Roupa } from '../roupas/roupaModelo/roupa.model';
import { Pedido } from '../shared/models/pedido';
import { EstadosService } from '../services';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent {

  constructor(private estados: EstadosService ) { }

  

  pedido =  new Pedido();
  usuario : string = '';
  roupaSelecionada : string ='';
  quantidade : number = 0;
  roupaPrazo : number = 0;
  roupaPreco: number = 0;
  prazoTotal: number = 0;
  orcamento: number = 0;
  dataAtual: Date = new Date()

  pedidoAprovado: boolean = false;
  pedidoRejeitado: boolean = false;
  numeroPedido: string = '';

  roupas : any = this.pedido.pedidoRoupas;

  ngOnInit(): void {
    
      this.estados.userEmail$.subscribe((userEmail) =>{
      this.usuario = userEmail;
    })}


  roupasDisponiveis: Roupa[] = [
    new Roupa(1, 'Camisa', 50, 2),
    new Roupa(2, 'Calça', 100, 3),
    new Roupa(3, 'Vestido', 150, 4),
  ];


  calculaPrazoPreco(tipoRoupa: string){
    
    const roupa = this.roupasDisponiveis.find(
      (roupa) => roupa.nome === tipoRoupa);
    
    let prazo : any = roupa?.prazo;
    let preco : any = roupa?.preco;

    this.roupaPrazo = prazo;
    this.roupaPreco = (preco * this.quantidade);
  }

  calculaOrcamentoPrazo(){
    const somaPrecos = this.pedido.pedidoRoupas.reduce((total, roupa) => total + roupa.preco, 0);
    this.orcamento = somaPrecos;

    const prazo = this.pedido.pedidoRoupas.reduce((max, roupa) => Math.max(max, roupa.prazo), -Infinity);
    this.prazoTotal = prazo;
  }

  adicionar() {
    this.calculaPrazoPreco(this.roupaSelecionada);
  
    this.pedido.pedidoRoupas.push({ tipo: this.roupaSelecionada , quantidade: this.quantidade , prazo:this.roupaPrazo, preco : this.roupaPreco, });

    this.calculaOrcamentoPrazo();
  }

  aprovarPedido() {
    this.pedido.pedidoEstado = 'EM ABERTO';
    this.pedido.pedidoCliente = this.usuario;
    this.pedido.pedidoPrazo = this.prazoTotal;
    this.pedido.pedidoHora = this.dataAtual.getHours();
    this.pedido.pedidoDia = this.dataAtual.getDate();
    this.pedido.pedidoMes = this.dataAtual.getMonth() + 1;
    this.pedido.pedidoAno = this.dataAtual.getFullYear();

    window.alert("O seu pedido foi efetuado!");
    
  }
  
  rejeitarPedido() {
    this.pedido.pedidoNum  = 0;
    this.pedido.pedidoCliente= '';
    this.pedido.pedidoRoupas = [];
    this.pedido.pedidoOrcamento = 0;
    this.pedido.pedidoPrazo = 0;
    this.pedido.pedidoHora = 0;
    this.pedido.pedidoDia = 0;
    this.pedido.pedidoMes = 0;
    this.pedido.pedidoAno = 0;
    this.pedido.pedidoEstado = '';

    this. roupaSelecionada ='';
    this.quantidade = 0;
    this.roupaPrazo = 0;
    this.roupaPreco = 0;
    this.prazoTotal = 0;
    this.orcamento = 0;

    window.alert("Pedido cancelado!");

  }

}
