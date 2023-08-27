import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CancelarPedidoComponent } from './cancelar-pedido/cancelar-pedido.component';
import { FinalizarPedidoComponent } from './finalizacao-pedido/finalizacao-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CancelarPedidoComponent,
    FinalizarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
