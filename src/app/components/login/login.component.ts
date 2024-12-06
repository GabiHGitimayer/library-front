import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { Login } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login:string = "";
  password:string = "";

  private authService = inject(AuthService);
  private router = inject(Router);

  logar() {
    const loginData: Login = {
      login: this.login,
      password: this.password
    };

    this.authService.realizarAuth(loginData).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido:', response);
        this.router.navigate(['/biblioteca']);
      },
      error: (err) => {
        console.error('Erro ao realizar login:', err);
        alert('Nome de usuário ou senha inválidos!');
      }
    });
  }
}
