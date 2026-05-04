import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service'; 

@Component({
  selector: 'app-conteudo-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conteudo-carrinho.component.html',
  styleUrl: './conteudo-carrinho.component.css',
})
export class ConteudoCarrinhoComponent {
  
  @Output()
  onClose = new EventEmitter<void>();

  constructor(public carrinhoService: CarrinhoService) {}

  fecharCarrinho(){
    this.onClose.emit();
  }
}
