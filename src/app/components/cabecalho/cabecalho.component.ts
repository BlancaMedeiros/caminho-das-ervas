import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { SecaoSiteType } from '../../types/secao.type';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
 @Input() 
 usuarioLogado: string | null = null;

  isDropdownOpen = false;

  @Output()
  onChangePaginaAtual = new EventEmitter<SecaoSiteType>();

  @Output()
abrirLoginEvent = new EventEmitter<void>();

@Output()
logoutEvent = new EventEmitter<void>();

logout(){
  this.logoutEvent.emit();
}

abrirLogin(event: Event){
  event.preventDefault(); // evita recarregar a página
  console.log("clicou no login");
  this.abrirLoginEvent.emit();}

  paginaAtual: SecaoSiteType = "paginaInicial";
  toggleDropdown(open: boolean) {
    this.isDropdownOpen = open;
  }

  setPaginaAtual(secao: SecaoSiteType){
    this.paginaAtual = secao;
    this.onChangePaginaAtual.emit(this.paginaAtual);
  }
}
