import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutocadastroComponent } from './autocadastro/autocadastro.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
