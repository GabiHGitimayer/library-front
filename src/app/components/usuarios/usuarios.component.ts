import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { User } from '../../models/user.model';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NavbarComponent, RouterLink, NgFor, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  usuarios: User[] = [];
  dropdownOpenId: number | null = null;
  usuarioService = inject(UsuarioService);

  constructor() {}

  ngOnInit(): void {
    this.listAllUsers();
  }

  trackById(index: number, usuario: User): number {
    return usuario.userId;
  }

  listAllUsers() {
    this.usuarioService.listarUsuarios().subscribe({
      next: (value) => {
        this.usuarios = value;
      },
      error: (erro) => {
        console.error("Erro ao buscar usuários:", erro);
        alert("Erro ao buscar usuários");
      },
    });
  }

  toggleDropdown(userId: number) {
    this.dropdownOpenId = this.dropdownOpenId === userId ? null : userId;
  }

  excluirUsuario(userId: number) { 
    this.usuarioService.deletarUsuario(userId).subscribe({
      next: () => {
        console.log(`Usuário com ID ${userId} excluído com sucesso.`);
        this.usuarios = this.usuarios.filter(usuario => usuario.userId !== userId);
        this.dropdownOpenId = null;
      },
      error: (erro) => {
        console.error("Erro ao excluir usuário:", erro);
        alert("Erro ao excluir usuário");
      },
    });
  }
}
