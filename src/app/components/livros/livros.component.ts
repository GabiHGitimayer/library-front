import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { Livro } from '../../models/livro.model';
import { LivroService } from '../../service/livro/livro.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [NavbarComponent, RouterLink, NgFor, CommonModule],
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {
  livros: Livro[] = [];
  livroService = inject(LivroService);
  dropdownOpenId: number | null = null;

  ngOnInit(): void {
    this.findAll();
  }

  trackById(index: number, livro: Livro): number {
    return livro.bookId;
  }

  findAll() {
    this.livroService.listarLivros().subscribe({
      next: (value) => {
        this.livros = value;
      },
      error: (erro) => {
        console.error("Erro ao buscar livros:", erro);
        alert("Erro ao buscar livros");
      },
    });
  }

  toggleDropdown(bookId: number) {
    this.dropdownOpenId = this.dropdownOpenId === bookId ? null : bookId;
  }

  excluirLivro(bookId: number) {
    this.livroService.deletarLivro(bookId).subscribe({
      next: () => {
        console.log(`Livro com ID ${bookId} excluído com sucesso.`);
        this.livros = this.livros.filter(livro => livro.bookId !== bookId);
        this.dropdownOpenId = null;
      },
      error: (erro) => {
        console.error("Erro ao excluir livro:", erro);
        alert("O livro não pode ser excluído por estar vinculado a um empréstimo!");
      },
    });
  }
}
