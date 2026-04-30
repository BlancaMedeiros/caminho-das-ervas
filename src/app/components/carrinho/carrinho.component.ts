import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConteudoCarrinhoComponent } from '../conteudo-carrinho/conteudo-carrinho.component';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule,ConteudoCarrinhoComponent],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent {
  carrinhoAberto = false;
  itens = [
    { nome: 'Sabonete Natural', preco: 15.90 },
    { nome: 'Óleo Essencial', preco: 45.00 }
  ];

  toggleCarrinho() {
    this.carrinhoAberto = !this.carrinhoAberto;
  }
}
