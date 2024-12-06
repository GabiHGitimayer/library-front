import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { Login, LoginResponseDTO } from '../../models/auth.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login:string = "";
  password:string = "";

  private authService = inject(AuthService);
  private router = inject(Router);

  logar(): void {
    const loginData: Login = {
      login: this.login,
      password: this.password
    };

    this.authService.realizarAuth(loginData).subscribe({
      next: (response: LoginResponseDTO) => {
        console.log('Login bem-sucedido:', response);
        localStorage.setItem('token', response.token)
        this.router.navigate(['/biblioteca']);
      },
      error: (err) => {
        console.error('Erro ao realizar login:', err);
        alert('Nome de usuário ou senha inválidos!');
      }
    });
  }
}
