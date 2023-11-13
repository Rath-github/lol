import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roupa } from './roupaModelo/roupa.model';

@Component({
  selector: 'app-roupas',
  templateUrl: './roupas.component.html',
  styleUrls: ['./roupas.component.css']
})
export class RoupasComponent implements OnInit {
  pecas: Roupa[] = [];
  campoEditar: boolean = false;
  campoNovo: boolean = false;
  nomeSelecionado: string = '';
  roupaSelecionada: Roupa = new Roupa(0, '', 0, 0);
  novaRoupa: Roupa = new Roupa(0, '', 0, 0);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarRoupas();
  }

  carregarRoupas(): void {
    this.http.get<Roupa[]>('http://localhost:3333/pecas').subscribe(pecas => {
      this.pecas = pecas;
    });
  }

  remover(id: number): void {
    if (confirm(`Deseja realmente remover o item: ${id}?`)) {
      this.http.delete(`http://localhost:3333/pecas/${id}`).subscribe(() => {
        this.carregarRoupas();
      });
    }
  }

  selecionarEditar(id: number): void {
    this.http.get<Roupa>(`http://localhost:3333/pecas/${id}`).subscribe(roupa => {
      this.roupaSelecionada = roupa || new Roupa(0, '', 0, 0);
      this.campoEditar = true;
      this.campoNovo = false;
      this.novaRoupa = { ...this.roupaSelecionada };
    });
  }

  editar(): void {
    this.http.put(`http://localhost:3333/pecas/${this.roupaSelecionada.id}`, this.novaRoupa).subscribe(() => {
      this.carregarRoupas();
      this.campoEditar = false;
    });
  }

  novo(): void {
    this.http.post('http://localhost:3333/pecas', this.novaRoupa).subscribe(() => {
      this.carregarRoupas();
      this.campoNovo = false;
    });
  }
}
