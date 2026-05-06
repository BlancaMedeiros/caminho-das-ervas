import { Component, Input, input } from '@angular/core';
import { produtoModel } from '../../models/produto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
})
export class ProdutoComponent {
  @Input()produto!:produtoModel;
}

