import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

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


  usuarioLogado: string | null = null; 
  constructor(private router: Router){}

  ngOnInit(){
    this.usuarioLogado = localStorage.getItem('usuarioLogado');
  }

  logout(){
    localStorage.removeItem('usuarioLogado'); // apaga login
    this.usuarioLogado = null; // atualiza tela
  }
}