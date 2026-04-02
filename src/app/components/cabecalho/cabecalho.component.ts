import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
  isDropdownOpen = false;

  toggleDropdown(open: boolean) {
    this.isDropdownOpen = open;
  }
}
