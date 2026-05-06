import { Injectable } from '@angular/core';
import { produtoModel } from '../models/produto.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private listaProdutos: produtoModel[] = [
    { nome: 'Sabonete Alecrim e Arruda e escalda pés 50g- Limpeza Energética', preco: 21.90, imagem: 'assets/sabonete.jpg', categoria:"banho" },
    { nome: 'Sabonete Artesanal de Dolomita - Efeito Porcelana', preco: 14.90, imagem: 'assets/domitila.jpg', categoria:"banho" }
  ];

  // Método para retornar os produtos
  getProdutos(): Observable<produtoModel[]> {
    return of(this.listaProdutos);
  }
}
