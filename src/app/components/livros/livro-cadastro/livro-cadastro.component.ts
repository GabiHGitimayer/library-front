import { Component, inject } from '@angular/core';

import { NavbarComponent } from "../../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LivroService } from '../../../service/livro/livro.service';
import { Livro } from '../../../models/livro.model';

@Component({
  selector: 'app-livro-cadastro',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MdbFormsModule, NgIf, RouterLink],
  templateUrl: './livro-cadastro.component.html',
  styleUrl: './livro-cadastro.component.scss'
})
export class LivroCadastroComponent {
  titulo: string = "";
  autor: string = "";
  isbn: string = "";
  genero: string = 'acao';
  anoPublicacao: number | undefined;
  quantExemplares: number | undefined;

  livroCadastrado: boolean = false;

  livroService = inject(LivroService);
  router = inject(Router);

  onGeneroChange() {
    console.log("Gênero selecionado:", this.genero);
  }

  cadastrar() {
    if (this.titulo === '' || this.autor === '' || this.isbn === '' || this.anoPublicacao === undefined || this.quantExemplares === undefined) {
      console.log("Preencha os dados do Livro!");
      alert("Você não preencheu todos os dados!");
      return;
    }

    const novoLivro: Livro = {
      idLivro: 0,
      titulo: this.titulo,
      autor: this.autor,
      genero: this.genero,
      isbn: this.isbn,
      anoPublicacao: this.anoPublicacao,
      quantExemplares: this.quantExemplares
    };

    this.livroService.criarLivro(novoLivro).subscribe({
      next: (response) => {
        console.log(`Livro ${this.titulo} cadastrado com sucesso!`, response);
        this.livroCadastrado = true;

        setTimeout(() => {
          this.router.navigate(['/biblioteca/livros']);
        }, 2000);
      },
      error: (erro) => {
        console.error("Erro ao cadastrar livro:", erro);
        alert("Erro ao cadastrar o livro. Tente novamente.");
      }
    });
  }
}
