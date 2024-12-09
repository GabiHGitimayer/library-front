import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";

import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { userType } from '../../../models/user.model';
import { AuthService } from '../../../service/auth/auth.service';
import { Register } from '../../../models/auth.model';

@Component({
  selector: 'app-usuario-cadastro',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MdbFormsModule, NgIf, RouterLink],
  templateUrl: './usuario-cadastro.component.html',
  styleUrl: './usuario-cadastro.component.scss'
})
export class UsuarioCadastroComponent {
  name: string = "";
  password: string = "";
  cpf: string = "";
  email: string = "";
  type: userType = userType.USUARIO;
  usuarioCadastrado: boolean = false;

  router = inject(Router);
  private authService = inject(AuthService);

  cadastrar() {
    if (this.name === '' || this.cpf === '' || this.password === '') {
      alert("Você não preencheu todos os dados do Usuário!");
    }
      const novoUsuario: Register = {
        name: this.name,
        cpf: this.cpf,
        password: this.password,
        type: this.type,
        email: this.email
      }

      this.authService.registrarAuth(novoUsuario).subscribe({
  next: (res: any) => {
    this.usuarioCadastrado = true;

    setTimeout(() => {
      this.router.navigate(['/biblioteca/usuarios']);
    }, 2000);
  },
  error: (erro: any) => {
    console.error("Erro ao cadastrar o usuário:", erro);
    alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
  }
});
    }
  
}
