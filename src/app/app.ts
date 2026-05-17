import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AdminModalService } from './services/admin-modal.service';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RodapeComponent,
    CabecalhoComponent,
    CarrinhoComponent,
    ProductListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-caminho-das-ervas');
  constructor(public adminService:AdminModalService){}
}
