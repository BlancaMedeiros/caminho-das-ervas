import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RodapeComponent,
    CabecalhoComponent,
    CarrinhoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-caminho-das-ervas');
  constructor(private router: Router){}

}
