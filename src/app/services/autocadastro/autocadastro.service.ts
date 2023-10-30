
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models';



@Injectable({
  providedIn: 'root'
})
export class AutocadastroService {
 
    private url = 'https://localhost:8080/autocadastro/criar'; // Precisa mudar para a URL do do backend
  
    constructor(private http: HttpClient) {}
  
    cadastrarUsuario(usuario: Usuario): Observable<any> {
      return this.http.post<any>(`${this.url}/autocadastro/criar`, usuario);
    }
}


