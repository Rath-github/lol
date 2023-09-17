import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // Verifique se este import está correto


import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ClienteComponent,
    PedidoComponent,
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
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Certifique-se de que AppRoutingModule está incluído aqui
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
