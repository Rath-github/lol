import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { ConfirmarPagamentoComponent } from './confirmar-pagamento/confirmar-pagamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento/confirmar-recolhimento.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';
import { FinalizarPedidoComponent } from './finalizacao-pedido/finalizacao-pedido.component';
import { RelatorioClientesFieisComponent } from './relatorio-clientes-fieis/relatorio-clientes-fieis.component';
import { RoupasComponent } from './roupas/roupas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'autocadastro', component: AutocadastroComponent },
  { path: 'lista-pedidos', component: ListaPedidosComponent },
  { path: 'consulta-pedido', component: ConsultaPedidoComponent },
  { path: 'Funcionarios', component: FuncionariosComponent },
  { path: 'autocadastro', component: AutocadastroComponent }, // Adicione esta linha
  { path: 'cancelar-pedido', component: CancelarPedidoComponent },
  { path: 'finalizar-pedido', component: FinalizarPedidoComponent },
  { path: 'relatorio-clientes-fieis', component: RelatorioClientesFieisComponent},
  { path: 'roupas', component: RoupasComponent},
  {
    path: 'confirmar-pagamento/:numero',
    component: ConfirmarPagamentoComponent,
  },
  { path: 'funcionario', component: FuncionarioComponent },
  {
    path: 'confirmar-recolhimento/:numero',
    component: ConfirmarRecolhimentoComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
