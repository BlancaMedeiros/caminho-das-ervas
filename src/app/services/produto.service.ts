import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private api = 'http://127.0.0.1:5000/produtos';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.api);
  }

  getProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.api}/${id}`);
  }
}



















/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Produto } from '../models/produto.model';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  private api = 'http://localhost:5000/produtos';

  // dados mock (opcional)
  private listaProdutos: produtoModel[] = [
    {
      nome: 'Sabonete Alecrim e Arruda e escalda pés 50g- Limpeza Energética',
      preco: 21.90,
      imagem: 'assets/sabonete.jpg',
      categoria: 'banho'
    },
    {
      nome: 'Sabonete Artesanal de Dolomita - Efeito Porcelana',
      preco: 14.90,
      imagem: 'assets/domitila.jpg',
      categoria: 'banho'
    }
  ];

  constructor(private http: HttpClient) {}

  // ===== MOCK (local) =====
  getProdutosMock(): Observable<produtoModel[]> {
    return of(this.listaProdutos);
  }

  // ===== API REAL =====
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto>(this.api);
  }

  getProduto(id: number): Observable<produtoModel> {
    return this.http.get(`${this.api}/${id}`);
  }

  criar(produto: produtoModel): Observable<produtoModel> {
    return this.http.post(this.api, produto);
  }

  atualizar(id: number, produto: any): Observable<any> {
    return this.http.put(`${this.api}/${id}`, produto);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}*/