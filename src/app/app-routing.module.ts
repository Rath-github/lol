import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { ConfirmarPagamentoComponent } from './confirmar-pagamento/confirmar-pagamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento/confirmar-recolhimento.component';
import { PecasRoupasComponent } from './pecas-roupas/pecas-roupas.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { RelatorioReceitasComponent } from './relatorio-receitas/relatorio-receitas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'autocadastro', component: AutocadastroComponent },
  { path: 'lista-pedidos', component: ListaPedidosComponent },
  { path: 'consulta-pedido', component: ConsultaPedidoComponent },
  { path: 'pecas-roupas', component: PecasRoupasComponent },
  { path: 'Funcionarios', component: FuncionariosComponent },
  { path: 'relatorio-receitas', component: RelatorioReceitasComponent },
  { path: 'autocadastro', component: AutocadastroComponent }, // Adicione esta linha
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
