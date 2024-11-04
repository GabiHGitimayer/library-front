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

  idLivro!: number;
  titulo: string = '';
  autor: string = '';
  genero: string = '';
  isbn: string = '';
  anoPublicacao!: number;
  quantExemplares!: number;
  livroEditado: boolean = false;

  ngOnInit() {
    this.idLivro = +this.route.snapshot.paramMap.get('id')!;

    this.livroService.getLivroById(this.idLivro).subscribe(
      (livro) => {
        this.titulo = livro.titulo;
        this.autor = livro.autor;
        this.genero = livro.genero;
        this.isbn = livro.isbn;
        this.anoPublicacao = livro.anoPublicacao;
        this.quantExemplares = livro.quantExemplares;
      },
      (error) => {
        console.error('Erro ao buscar livro:', error);
      }
    );
  }

  editar() {
    const livroAtualizado: Livro = {
      idLivro: this.idLivro,
      titulo: this.titulo,
      autor: this.autor,
      genero: this.genero,
      isbn: this.isbn,
      anoPublicacao: this.anoPublicacao,
      quantExemplares: this.quantExemplares
    };

    this.livroService.atualizarLivro(this.idLivro, livroAtualizado).subscribe(
      (response) => {
        console.log(`Livro ${response.titulo} atualizado com sucesso!`);
        this.livroEditado = true;

        this.router.navigate(['/biblioteca/livros']);
      },
      (error) => {
        console.error("Erro ao atualizar o livro:", error);
        alert(`Ocorreu um erro ao atualizar o livro ${this.titulo}. Tente novamente.`);
      }
    );
  }

  onGeneroChange() {
    console.log("Gênero alterado:", this.genero);
  }
}
