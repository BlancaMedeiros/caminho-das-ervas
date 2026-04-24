import { Component, Input } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  @Input() produto!: Produto;
}





















/* import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { produtoModel } from '../../models/produto.model';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  @Input()produto!:produtoModel;
}
  @Input() filtroProdutos: CategoriaType | null | "todos" = "todos";

  produtos: produtoModel[] = [];
  produtosFiltrados: produtoModel[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe((produtos: any) => {
      this.produtos = produtos;
      this.aplicarfiltro(this.filtroProdutos ?? "todos");
    });
  }

  ngOnChanges(): void {
    this.aplicarfiltro(this.filtroProdutos ?? "todos");
  }

  aplicarfiltro(filtro: CategoriaType | null | "todos") {
    if (!filtro || filtro === "todos") {
      this.produtosFiltrados = this.produtos;
    } else {
      this.produtosFiltrados = this.produtos.filter(
        p => p.categoria === filtro
      );
    }
  }
}
*/