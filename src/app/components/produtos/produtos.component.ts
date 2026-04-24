import { Component, Input, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { ProdutoComponent } from '../produto/produto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, ProdutoComponent],
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

  @Input() filtroProdutos: string = 'todos'; // 👈 AQUI

  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.getProdutos().subscribe(dados => {
      this.produtos = dados;
      this.aplicarFiltro();
    });
  }

  ngOnChanges(): void {
    this.aplicarFiltro();
  }

  aplicarFiltro() {
    if (this.filtroProdutos === 'todos') {
      this.produtosFiltrados = this.produtos;
    } else {
      this.produtosFiltrados = this.produtos.filter(
        p => p.categoria === this.filtroProdutos
      );
    }
  }
}



























/*import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ProdutoComponent],
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.getProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.produtosFiltrados = dados;
      },
      error: (err) => console.error(err)
    });
  }
}*/

/*import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { produtoModel } from '../../models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

  produtos: produtoModel[] = [];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.getProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
      },
      error: (erro) => {
        console.error('Erro ao carregar produtos', erro);
      }
    });
  }
}*/