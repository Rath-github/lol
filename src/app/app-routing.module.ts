import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'cliente', component: ClienteComponent },
   { path: 'pedido', component: PedidoComponent },
   { path: 'consultar-pedido', component: ConsultarPedidoComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
