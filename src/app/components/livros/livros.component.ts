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

  toggleDropdown(id: number): void {
    this.dropdownOpenId = this.dropdownOpenId === id ? null : id;
  }

  trackById(index: number, livro: Livro): number {
    return livro.idLivro;
  }

  findAll(): void {
    this.livroService.listarLivros().subscribe({
      next: (value) => {
        this.livros = value;
      },
      error: (erro) => {
        console.error("Erro ao buscar livros:", erro);
      },
    });
  }

  excluirLivro(idLivro: number): void {
    if (confirm("Tem certeza que deseja excluir este livro?")) {
      this.livroService.deletarLivro(idLivro).subscribe({
        next: () => {
          console.log(`Livro com ID ${idLivro} excluído com sucesso.`);
          this.livros = this.livros.filter(livro => livro.idLivro !== idLivro);
          this.dropdownOpenId = null;
        },
        error: (erro) => {
          console.error("Erro ao excluir livro:", erro);
          alert("O livro não pode ser excluído por estar vinculado a um empréstimo!");
        },
      });
    }
  }
}
