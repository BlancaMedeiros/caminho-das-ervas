import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { SecaoSiteType } from './types/secao.type';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PaginaInicialComponent,
    ProdutosComponent,
    RodapeComponent,
    CabecalhoComponent,
    LoginComponent,
    CadastroComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-caminho-das-ervas');

  paginaAtual: SecaoSiteType = "paginaInicial";



  usuarioLogado: string | null = null;

  ngOnInit(){
    this.usuarioLogado = localStorage.getItem('usuarioLogado');
  }
  abrirCadastro() {
    this.mostrarLogin = false;
    this.mostrarCadastro = true;
  }
  abrirLogin() {
    this.mostrarCadastro = false;
    this.mostrarLogin = true;
  }

  onChangePaginaAtual(paginaAtual: SecaoSiteType){
    this.paginaAtual = paginaAtual;
  }

  onLoginSucesso(){
    this.mostrarLogin = false;
    this.mostrarCadastro = false;
    this.usuarioLogado = localStorage.getItem('usuarioLogado');
    this.paginaAtual = 'paginaInicial'; // Garante o redirecionamento
  }

  logout(){
  localStorage.removeItem('usuarioLogado'); // apaga login
  this.usuarioLogado = null; // atualiza tela
}
  mostrarLogin = false;
  mostrarCadastro = false;
}
