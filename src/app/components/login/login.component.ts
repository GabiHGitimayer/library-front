import { Component, inject } from '@angular/core';

import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  nomeAF:string = "";
  senhaAF:string = "";

  router = inject(Router);

  logar() {
    if (this.nomeAF == "Admin" && this.senhaAF == "admin") { 
      console.log(`Acesso ao ADMIN ${this.nomeAF} liberado!`);

      this.router.navigate(['/biblioteca']);
    } else if (this.nomeAF == "Funcionario" && this.senhaAF == "funcionario") {
      console.log(`Acesso ao FUNCIONÁRIO ${this.nomeAF} liberado!`);

      this.router.navigate(['/biblioteca']);
    } else {
      console.log("Acesso negado!");
      alert("Nome de usuário ou senha inválidos!");
    }
  }
}
