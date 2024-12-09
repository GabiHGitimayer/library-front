import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Emprestimo, realizeLoan } from '../../../models/emprestimo.model';
import { User } from '../../../models/user.model';
import { Livro } from '../../../models/livro.model';
import { EmprestimoService } from '../../../service/emprestimo/emprestimo.service';

@Component({
  selector: 'app-emprestimo-cadastro',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MdbFormsModule, NgIf, RouterLink],
  templateUrl: './emprestimo-cadastro.component.html',
  styleUrls: ['./emprestimo-cadastro.component.scss']
})
export class EmprestimoCadastroComponent {
  userId: number | undefined;
  bookId: number | undefined;
  loanDate: Date = new Date();
  returnDate: Date = new Date();
  efectiveReturnDate: Date = new Date();

  //.setDate((new Date().getDay()+7)) ;
  loanStatus: string = "Emprestado";

  emprestimoCadastrado: boolean = false;

  router = inject(Router);

  constructor(private emprestimoService: EmprestimoService) { }

  cadastrar() {
    if (!this.bookId || !this.bookId || !this.loanDate) {
      console.log("Preencha os dados do Empréstimo!");
      alert("Você não preencheu todos os dados do Empréstimo!");
      return;
    }
  
    const novoEmprestimo: realizeLoan = {
      user: { userId: this.bookId } as User,
      book: { bookId: this.bookId } as Livro,
      loanDate: this.loanDate,
      returnDate: this.returnDate,
      efectiveReturnDate: this.efectiveReturnDate,
      loanStatus: this.loanStatus
    };
  
    console.log('Novo Empréstimo:', novoEmprestimo);
  
    this.emprestimoService.realizarEmprestimo(novoEmprestimo).subscribe({
      next: (res) => {
        console.log('Resposta do backend:', res);
        this.emprestimoCadastrado = true;
        setTimeout(() => {
          this.router.navigate(['/biblioteca/emprestimos']);
        }, 2000);
      },
      error: (erro) => {
        console.error('Erro ao cadastrar o empréstimo:', erro);
        alert('Ocorreu um erro ao cadastrar o empréstimo. Tente novamente.');
      }
    });
  }
  


}
