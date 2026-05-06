import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() trocarParaCadastro = new EventEmitter<void>();
  @Output() loginSucesso = new EventEmitter<void>();

  email = '';
  password = '';
  errorMessage = '';

  onSubmit() {
  if (this.email === 'admin@email.com' && this.password === '123456') {

    localStorage.setItem('usuarioLogado', this.email); // 💾 SALVA

    this.loginSucesso.emit();

  } else {
    this.errorMessage = 'Credenciais inválidas';
  }
}
irParaCadastro(event: Event) {
  event.preventDefault();
  this.trocarParaCadastro.emit();
}
  fechar(){
    this.loginSucesso.emit();
  }
}
