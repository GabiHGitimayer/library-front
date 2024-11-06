import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../../service/emprestimo/emprestimo.service';
import { MultaService } from '../../service/multa/multa.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { Multa } from '../../models/multa.model';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [NavbarComponent, RouterLink, NgIf],
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit {
  emprestimos: any[] = [];
  multa: Multa | null = null;
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
    this.emprestimoService.devolverEmprestimo(idEmprestimo).subscribe(() => {
      this.calcularMulta(idEmprestimo);
    });
  }

  calcularMulta(idEmprestimo: number): void {
    this.multaService.calcularMulta(idEmprestimo).subscribe(
      (multa: Multa) => {
        if (multa.valorMulta > 0) {
          this.multa = new Multa(multa.valorMulta);
          this.mensagemMulta = "A multa é de R$ ${multa.valorMulta.toFixed(2)} devido ao atraso.";
        } else {
          this.mensagemMulta = 'Empréstimo devolvido sem multas.';
        }
      },
      (error) => {
        console.error('Erro ao calcular a multa:', error);
        this.mensagemMulta = 'Erro ao calcular a multa.';
      }
    );
  }
}