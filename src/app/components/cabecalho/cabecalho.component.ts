import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
  isDropdownOpen = false;

  @Output()
  onChangePaginaAtual = new EventEmitter<SecaoSite>();

  paginaAtual: SecaoSite = "paginaInicial";
  toggleDropdown(open: boolean) {
    this.isDropdownOpen = open;
  }

  setPaginaAtual(secao: SecaoSite){
    this.paginaAtual = secao;
    this.onChangePaginaAtual.emit(this.paginaAtual);
  }
}
