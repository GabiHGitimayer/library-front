import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { EmprestimoService } from '../../service/emprestimo/emprestimo.service';
import { Emprestimo } from '../../models/emprestimo.model';

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './emprestimos.component.html',
  styleUrl: './emprestimos.component.scss'
})
export class EmprestimosComponent {
  emprestimos: Emprestimo[] = [];

  emprestimoService = inject(EmprestimoService);

  constructor() {
    this.findAll();
  }

  findAll() {
    this.emprestimoService.listarEmprestimos().subscribe(
      {
        next: value =>{
          this.emprestimos = value;
        },
        error: erro =>{
          console.log("burro");
        }
      }
    )
  }
}
