import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EstadosService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';



import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ConfirmarPagamentoComponent } from './confirmar-pagamento/confirmar-pagamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento/confirmar-recolhimento.component';
import { ManutencaoFuncionarioComponent } from './manutencaoFuncionario/manutencaoFuncionario.component';
import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';
import { FinalizarPedidoComponent } from './finalizacao-pedido/finalizacao-pedido.component';
import { RelatorioClientesFieisComponent } from './relatorio-clientes-fieis/relatorio-clientes-fieis.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import { ConfirmacaoLavagemComponent } from './confirmacao-lavagem/confirmacao-lavagem.component';
import { RoupasComponent } from './roupas/roupas.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginaRelatoriosComponent } from './pagina-relatorios/pagina-relatorios.component';
import { RelatorioReceitasComponent } from './relatorio-receitas/relatorio-receitas.component';
import { RelatorioClientesComponent } from './relatorio-clientes/relatorio-clientes.component';





@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,
    LoginComponent,
    ClienteComponent,
    PedidoComponent,
    ConsultarPedidoComponent,
    ConfirmacaoLavagemComponent,
    RoupasComponent,
    ListaPedidosComponent,
    CancelarPedidoComponent,
    FinalizarPedidoComponent,
    RelatorioClientesFieisComponent,

    AutocadastroComponent,
    ListaPedidosComponent,
    ConfirmarPagamentoComponent,
    FuncionarioComponent,
    ConfirmarRecolhimentoComponent,
    ManutencaoFuncionarioComponent,
    PaginaRelatoriosComponent,
    RelatorioReceitasComponent,
    RelatorioClientesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    
  ],

  
  providers: [EstadosService],
  bootstrap: [AppComponent],

})
export class AppModule {}
