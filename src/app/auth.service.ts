import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private clientName: string = '';

  constructor() {}

  login(email: string, password: string): boolean {
    // Aqui você pode simular a lógica de autenticação. Por exemplo, verificar se as credenciais são válidas.
    // Se as credenciais estiverem corretas, defina isLoggedIn como true e clientName como o nome do cliente logado.
    // Este é apenas um exemplo simplificado, na prática, você precisaria fazer uma chamada ao backend para autenticar o usuário.
    if (email === 'cliente@example.com' && password === 'senha') {
      this.isLoggedIn = true;
      this.clientName = 'Cliente Exemplo';
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.clientName = '';
  }

  isLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getClientName(): string {
    return this.clientName;
  }
}
