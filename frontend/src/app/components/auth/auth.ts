import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // <-- Importante para mudar de página
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.html'
})
export class AuthComponent {
  user = { username: '', password: '' };

  // Injetamos o Router aqui no construtor
  constructor(private productService: ProductService, private router: Router) {}

  handleAuth(type: 'login' | 'register') {
    if (!this.user.username || !this.user.password) {
      alert("Preencha todos os campos");
      return;
    }

    // Decide qual método do serviço chamar com base no botão clicado
    const request = type === 'login' ?
      this.productService.login(this.user) :
      this.productService.register(this.user);

      request.subscribe({
        next: (res: any) => {
          alert(res.message || (type === 'login' ? "Login com sucesso!" : "Conta criada!"));

          // Se for login, redireciona o usuário para a área administrativa
          if (type === 'login') {
            this.router.navigate(['/admin']);
          }
      },
      error: (err: any) => {
        const msg = err.error?.message || "Servidor offline ou erro de credenciais.";
        alert("Erro: " + msg);
      }
    });
  }
}
