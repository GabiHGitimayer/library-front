import { Component, inject } from '@angular/core';

import { NavbarComponent } from "../../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LivroService } from '../../../service/livro/livro.service';
import { Livro, registerBooks } from '../../../models/livro.model';

@Component({
  selector: 'app-livro-cadastro',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MdbFormsModule, NgIf, RouterLink],
  templateUrl: './livro-cadastro.component.html',
  styleUrl: './livro-cadastro.component.scss'
})
export class LivroCadastroComponent {
  title: string = "";
  author: string = "";
  isbn: string = "";
  genre: string = 'acao';
  publicationYear: number | undefined;
  copiesQuantity: number | undefined;

  livroCadastrado: boolean = false;

  livroService = inject(LivroService);
  router = inject(Router);

  onGeneroChange() {
    console.log("Gênero selecionado:", this.genre);
  }

  cadastrar() {
    if (this.title === '' || this.author === '' || this.isbn === '' || this.publicationYear === undefined || this.copiesQuantity === undefined) {
      console.log("Preencha os dados do Livro!");
      alert("Você não preencheu todos os dados!");
      return;
    }

    const novoLivro: registerBooks = {
      title: this.title,
      author: this.author,
      genre: this.genre,
      isbn: this.isbn,
      publicationYear: this.publicationYear,
      copiesQuantity: this.copiesQuantity
    };

    this.livroService.criarLivro(novoLivro).subscribe({
      next: (response) => {
        console.log(`Livro ${this.title} cadastrado com sucesso!`, response);
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
