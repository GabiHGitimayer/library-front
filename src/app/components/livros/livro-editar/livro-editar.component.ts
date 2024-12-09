import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { LivroService } from '../../../service/livro/livro.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Livro } from '../../../models/livro.model';

@Component({
  selector: 'app-livro-editar',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MdbFormsModule, NgIf, RouterLink],
  templateUrl: './livro-editar.component.html',
  styleUrl: './livro-editar.component.scss'
})
export class LivroEditarComponent implements OnInit {
  livroService = inject(LivroService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  bookId!: number;
  title: string = '';
  author: string = '';
  genre: string = '';
  isbn: string = '';
  publicationYear!: number;
  copiesQuantity!: number;
  livroEditado: boolean = false;

  ngOnInit() {
    this.bookId = +this.route.snapshot.paramMap.get('id')!;

    this.livroService.getLivroById(this.bookId).subscribe(
      (livro) => {
        this.title = livro.title;
        this.author = livro.author;
        this.genre = livro.genre;
        this.isbn = livro.isbn;
        this.publicationYear = livro.publicationYear;
        this.copiesQuantity = livro.copiesQuantity;
      },
      (error) => {
        console.error('Erro ao buscar livro:', error);
        alert("Erro ao buscar livro");
      }
    );
  }

  editar() {
    const livroAtualizado: Livro = {
      bookId: this.bookId,
      title: this.title,
      author: this.author,
      genre: this.genre,
      isbn: this.isbn,
      publicationYear: this.publicationYear,
      copiesQuantity: this.copiesQuantity
    };

    this.livroService.atualizarLivro(this.bookId, livroAtualizado).subscribe(
      (response) => {
        console.log(`Livro ${response.title} atualizado com sucesso!`);
        this.livroEditado = true;

        this.router.navigate(['/biblioteca/livros']);
      },
      (error) => {
        console.error("Erro ao atualizar o livro:", error);
        alert(`Ocorreu um erro ao atualizar o livro ${this.title}. Tente novamente.`);
      }
    );
  }

  onGeneroChange() {
    console.log("Gênero alterado:", this.genre);
  }
}
