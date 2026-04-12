import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  standalone: true,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css',
})
export class ProdutosComponent {
  @Input() filtroProdutos!: SecaoSite;


}
