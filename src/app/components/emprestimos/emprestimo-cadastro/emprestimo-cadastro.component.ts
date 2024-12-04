import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Emprestimo } from '../../../models/emprestimo.model';
import { Usuario } from '../../../models/usuario.model';
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
  idUsuario: number | undefined;
  idLivro: number | undefined;
  dataEmprestimo: Date = new Date();
  dataDevolucao: Date = new Date();
  dataDevolucaoEfetiva: Date = new Date();

  //.setDate((new Date().getDay()+7)) ;
  statusEmprestimo: string = "Emprestado";

  emprestimoCadastrado: boolean = false;

  router = inject(Router);

  constructor(private emprestimoService: EmprestimoService) { }

  cadastrar() {
    if (!this.idUsuario || !this.idLivro || !this.dataEmprestimo) {
      console.log("Preencha os dados do Empréstimo!");
      alert("Você não preencheu todos os dados do Empréstimo!");
      return;
    }
  
    const novoEmprestimo: Emprestimo = {
      idEmprestimo: 0,
      usuario: { idUsuario: this.idUsuario } as Usuario,
      livro: { idLivro: this.idLivro } as Livro,
      dataEmprestimo: this.dataEmprestimo,
      dataDevolucao: this.dataDevolucao,
      dataDevolucaoEfetiva: this.dataDevolucaoEfetiva,
      statusEmprestimo: this.statusEmprestimo
    };
  
    // Adicione este log para verificar os dados enviados
    console.log('Novo Empréstimo:', novoEmprestimo);
  
    this.emprestimoService.realizarEmprestimo(novoEmprestimo).subscribe({
      next: (res) => {
        console.log('Resposta do backend:', res); // Log da resposta bem-sucedida
        this.emprestimoCadastrado = true;
        setTimeout(() => {
          this.router.navigate(['/biblioteca/emprestimos']);
        }, 2000);
      },
      error: (erro) => {
        console.error('Erro ao cadastrar o empréstimo:', erro); // Log do erro
        alert('Ocorreu um erro ao cadastrar o empréstimo. Tente novamente.');
      }
    });
  }
  


}
