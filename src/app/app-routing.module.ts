import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';
import { FinalizarPedidoComponent } from './finalizacao-pedido/finalizacao-pedido.component';
import { RelatorioClientesFieisComponent } from './relatorio-clientes-fieis/relatorio-clientes-fieis.component';

const routes: Routes = [
  { path: 'cancelar-pedido', component: CancelarPedidoComponent },
  { path: 'finalizar-pedido', component: FinalizarPedidoComponent },
  {path: 'relatorio-clientes-fieis', component: RelatorioClientesFieisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
