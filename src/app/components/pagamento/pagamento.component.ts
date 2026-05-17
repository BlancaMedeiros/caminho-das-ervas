import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { carrinhoModel } from '../../models/carrinho.model';

@Component({
  selector: 'app-pagamento',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.css',
})

  export class PagamentoComponent {
  pagamentoRealizado: boolean = false;
  
  // Variáveis para armazenar o resumo pós-venda
  itensPedido: carrinhoModel[] = [];
  totalPedido: number = 0;
  enderecoEntrega: string = '';

  formularioPagamento = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl('', [Validators.required, Validators.pattern(/^\d{11}$/)]),
    endereco: new FormControl('', [Validators.required]),
    metodo: new FormControl('pix', [Validators.required])
  });

  constructor(public carrinhoService: CarrinhoService) {}

  confirmarPagamento() {
    if (this.formularioPagamento.valid) {
      // 1. Salva os dados antes de limpar
      this.itensPedido = this.carrinhoService.getItens();
      this.totalPedido = this.carrinhoService.getPrecoTotal();
      this.enderecoEntrega = this.formularioPagamento.value.endereco || '';

      // 2. Muda a tela e limpa o carrinho
      this.pagamentoRealizado = true;
      this.carrinhoService.limparCarrinho();
    }
  }

  concluirNoWhatsApp() {
    let listaprodutos = "";
    this.itensPedido.forEach(item=>{
      listaprodutos+= `${item.quantidade}x ${item.produto.nome}\n`
    })

    
    const mensagem = `Olá! Gostaria de confirmar meu pedido.\nTotal: R$ ${this.totalPedido.toFixed(2)}\nForma de pagamento: ${this.formularioPagamento.value.metodo || ''}\nEndereço: ${this.enderecoEntrega}\nProdutos: ${listaprodutos}`;
    const url = `https://wa.me/5511959447449?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}