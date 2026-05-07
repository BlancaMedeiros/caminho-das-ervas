import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';
  constructor(private router: Router){}

  onSubmit() {
  if (this.email === 'admin@email.com' && this.password === '123456') {
    localStorage.setItem('usuarioLogado', this.email); // 💾 SALVA
  } else {
    this.errorMessage = 'Credenciais inválidas';
  }
}

  fechar(){
    this.router.navigate(["/"])
  }
}