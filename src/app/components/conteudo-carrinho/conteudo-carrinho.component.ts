import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conteudo-carrinho',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './conteudo-carrinho.component.html',
  styleUrl: './conteudo-carrinho.component.css',
})
export class ConteudoCarrinhoComponent {

  itens = [
    { nome: 'Sabonete Natural', preco: 15.90 },
    { nome: 'Óleo Essencial', preco: 45.00 }
  ];

  @Output()
  onClose = new EventEmitter<void>();

  fecharCarrinho(){
    this.onClose.emit();
  }
}
