import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PaginaInicialComponent, ProdutosComponent, RodapeComponent, CabecalhoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-caminho-das-ervas');
  paginaAtual: SecaoSite = "paginaInicial";

  onChangePaginaAtual(paginaAtual: SecaoSite){
    this.paginaAtual = paginaAtual;
  }
}
