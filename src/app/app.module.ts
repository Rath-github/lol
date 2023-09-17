import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfirmarPagamentoComponent } from './confirmar-pagamento/confirmar-pagamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento/confirmar-recolhimento.component';


import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { ConfirmarPagamentoComponent } from './confirmar-pagamento/confirmar-pagamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento/confirmar-recolhimento.component';
import { FooterComponent } from './footer/footer.component';
import { PecasRoupasComponent } from './pecas-roupas/pecas-roupas.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { RelatorioReceitasComponent } from './relatorio-receitas/relatorio-receitas.component';

import { AutocadastroComponent } from './autocadastro/autocadastro.component';


import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';
import { FinalizarPedidoComponent } from './finalizacao-pedido/finalizacao-pedido.component';
import { RelatorioClientesFieisComponent } from './relatorio-clientes-fieis/relatorio-clientes-fieis.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import { ConfirmacaoLavagemComponent } from './confirmacao-lavagem/confirmacao-lavagem.component';
import { RoupasComponent } from './roupas/roupas.component';




@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    ClienteComponent,
    PedidoComponent,
    ConsultarPedidoComponent,
    ConfirmacaoLavagemComponent,
    RoupasComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule

    HeaderComponent,
    LoginComponent,
    ClienteComponent,
    PedidoComponent,
    CancelarPedidoComponent,
    FinalizarPedidoComponent,
    RelatorioClientesFieisComponent

    AutocadastroComponent,
    ListaPedidosComponent,
    ConsultaPedidoComponent,
    ConfirmarPagamentoComponent,
    FuncionarioComponent,
    ConfirmarRecolhimentoComponent,
    FooterComponent,
    PecasRoupasComponent,
    FuncionariosComponent,
    RelatorioReceitasComponent,
  ],

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
