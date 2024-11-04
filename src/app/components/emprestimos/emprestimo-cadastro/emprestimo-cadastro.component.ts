import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-emprestimo-cadastro',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MdbFormsModule, NgIf, RouterLink],
  templateUrl: './emprestimo-cadastro.component.html',
  styleUrl: './emprestimo-cadastro.component.scss'
})
export class EmprestimoCadastroComponent {
  idUsuario: number | undefined;
  idLivro: number | undefined;
  dataEmprestimo: Date | undefined;
  dataDevolucao: Date | undefined;
  statusEmprestimo:string = 'acao';

  emprestimoCadastrado: boolean = false;

  router = inject(Router);

  onStatusChange() {
    console.log("Status marcado:", this.statusEmprestimo);
  }

  cadastrar() {
    if (this.idUsuario == undefined || this.idLivro == undefined || this.dataEmprestimo == undefined || this.dataDevolucao == undefined) {
      console.log("Preencha os dados do Empréstimo!");
      alert("Você não preencheu todos os dados do Empréstimo!");
    } else {
      console.log(`Empréstimo do Livro ${this.idLivro} para o Usuário ${this.idUsuario} cadastrado com sucesso!`);
      this.emprestimoCadastrado = true;

      setTimeout(() => {
        this.router.navigate(['/biblioteca/emprestimos']);
      }, 2000);
    }
  }
}
