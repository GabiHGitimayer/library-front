import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TipoUsuario, Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../service/usuario/usuario.service';

@Component({
  selector: 'app-usuario-editar',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MdbFormsModule, NgIf, RouterLink],
  templateUrl: './usuario-editar.component.html',
  styleUrl: './usuario-editar.component.scss'
})
export class UsuarioEditarComponent implements OnInit {
  usuarioService = inject(UsuarioService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  idUsuario!: number;
  nomeUsuario:string = "";
  cpf:string = "";
  senha:string = "";
  tipoUsuario!: TipoUsuario;
  usuarioEditado: boolean = false;

  ngOnInit() {
    this.idUsuario = +this.route.snapshot.paramMap.get('id')!;

    this.usuarioService.findUserbyId(this.idUsuario).subscribe(
      (usuario) => {
        this.nomeUsuario = usuario.nomeUsuario;
        this.cpf = usuario.cpf;
        this.senha = usuario.senha;
        this.tipoUsuario = usuario.tipoUsuario;
      },
      (error) => {
        console.error('Erro ao buscar o usuário:', error);
      }
    );
  }

  editar() {
    const usuarioAtualizado: Usuario = {
      idUsuario: this.idUsuario,
      nomeUsuario: this.nomeUsuario,
      cpf: this.cpf,
      senha: this.senha,
      tipoUsuario: this.tipoUsuario
    };

    this.usuarioService.alterarUsuario(this.idUsuario, usuarioAtualizado).subscribe(
      (response) => {
        console.log(`Usuário ${response.nomeUsuario} atualizado com sucesso!`);
        this.usuarioEditado = true;

        this.router.navigate(['/biblioteca/usuarios']);
      },
      (error) => {
        console.error("Erro ao atualizar o usuário:", error);
        alert(`Ocorreu um erro ao atualizar o usuário ${this.nomeUsuario}. Tente novamente.`);
      }
    );
  }

  onTipoUsuarioChange() {
    console.log("Tipo de usuário atualizado:", this.tipoUsuario);
  }
}
