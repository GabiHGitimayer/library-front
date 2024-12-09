import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { userType, User } from '../../../models/user.model';
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
  userName:string = "";
  cpf:string = "";
  senha:string = "";
  email:string = "";
  userType!: userType;
  usuarioEditado: boolean = false;

  ngOnInit() {
    this.idUsuario = +this.route.snapshot.paramMap.get('id')!;

    this.usuarioService.listarUsuariosPeloID(this.idUsuario).subscribe(
      (usuario) => {
        this.userName = usuario.userName;
        this.cpf = usuario.userCpf;
        this.senha = usuario.userPassword;
        this.userType = usuario.userType;
      },
      (error) => {
        console.error('Erro ao buscar o usuário:', error);
      }
    );
  }

  editar() {
    const usuarioAtualizado: User = {
      userId: this.idUsuario,
      userName: this.userName,
      userCpf: this.cpf,
      userPassword: this.senha,
      userType: this.userType
    };

    this.usuarioService.atualizarUsuario(this.idUsuario, usuarioAtualizado).subscribe(
      (response) => {
        console.log(`Usuário ${response.userName} atualizado com sucesso!`);
        this.usuarioEditado = true;

        this.router.navigate(['/biblioteca/usuarios']);
      },
      (error) => {
        console.error("Erro ao atualizar o usuário:", error);
        alert(`O usuário ${this.userName} não pode ser editado, pois está vinculado a um empréstimo`);
      }
    );
  }
}