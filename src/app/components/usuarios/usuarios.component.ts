import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
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
  usuarios: Usuario[] = [];
  dropdownOpenId: number | null = null;
  usuarioService = inject(UsuarioService);

  constructor() {}

  ngOnInit(): void {
    this.listAllUsers();
  }

  trackById(index: number, usuario: Usuario): number {
    return usuario.idUsuario;
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

  toggleDropdown(idUsuario: number) {
    this.dropdownOpenId = this.dropdownOpenId === idUsuario ? null : idUsuario;
  }

  excluirUsuario(idUsuario: number) { 
    this.usuarioService.deletarUsuario(idUsuario).subscribe({
      next: () => {
        console.log(`Usuário com ID ${idUsuario} excluído com sucesso.`);
        this.usuarios = this.usuarios.filter(usuario => usuario.idUsuario !== idUsuario);
        this.dropdownOpenId = null;
      },
      error: (erro) => {
        console.error("Erro ao excluir usuário:", erro);
        alert("Erro ao excluir usuário");
      },
    });
  }
}
