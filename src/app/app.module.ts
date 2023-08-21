import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ConfirmarPagamentoComponent } from './confirmar-pagamento/confirmar-pagamento.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
=======
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
>>>>>>> 2c53b7b920fc8b2ab22c897c2b53f569b1e0716a

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ConfirmarPagamentoComponent,
FuncionarioComponent
=======
    LoginComponent
>>>>>>> 2c53b7b920fc8b2ab22c897c2b53f569b1e0716a
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
