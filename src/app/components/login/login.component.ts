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

  fechar(){
    this.loginSucesso.emit();
  }
}