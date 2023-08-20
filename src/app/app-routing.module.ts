import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';

const routes: Routes = [
  { path: 'cancelar-pedido', component: CancelarPedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
