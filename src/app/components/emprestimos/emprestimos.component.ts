import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../../service/emprestimo/emprestimo.service';
import { MultaService } from '../../service/multa/multa.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { Fine } from '../../models/multa.model';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Emprestimo } from '../../models/emprestimo.model';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [NavbarComponent, RouterLink, NgIf],
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit {
  emprestimos: Emprestimo[] = [];
  multa: Fine | null = null;
  mensagemMulta: string = '';

  constructor(
    private emprestimoService: EmprestimoService,
    private multaService: MultaService
  ) {}

  ngOnInit(): void {
    this.listarEmprestimos();
  }

  listarEmprestimos() {
    this.emprestimoService.listarEmprestimos().subscribe((data: any[]) => {
      this.emprestimos = data;
    });
  }

  devolverLivro(idEmprestimo: number): void {
    this.emprestimoService.devolverEmprestimo(idEmprestimo).subscribe({
      next: () => {
        this.calcularMulta(idEmprestimo);
      },
      error: (error) => {
        console.error('Erro ao devolver o livro:', error);
        this.mensagemMulta = 'Erro ao devolver o livro.';
      },
    });
  }

  calcularMulta(idEmprestimo: number): void {
    this.multaService.calcularMulta(idEmprestimo).subscribe({
      next: (multa: Fine) => {
        if (multa.fineValue > 0) {
          this.multa = multa;
          this.mensagemMulta = `A multa é de R$ ${multa.fineValue.toFixed(2)} devido ao atraso.`;
        } else {
          this.mensagemMulta = 'Empréstimo devolvido sem multas.';
        }
      },
      error: (error) => {
        console.error('Erro ao calcular a multa:', error);
        this.mensagemMulta = 'Erro ao calcular a multa.';
      },
    });
  }
}