import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";

import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { UsuarioService } from '../../../service/usuario/usuario.service';
import { TipoUsuario, Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-usuario-cadastro',
  standalone: true,
  imports: [NavbarComponent, FormsModule, MdbFormsModule, NgIf, RouterLink],
  templateUrl: './usuario-cadastro.component.html',
  styleUrl: './usuario-cadastro.component.scss'
})
export class UsuarioCadastroComponent {
  nomeUsuario:string = "";
  cpf:string = "";
  senha:string = "";
  tipoUsuario: TipoUsuario = TipoUsuario.USUARIO;

  usuarioCadastrado: boolean = false;

  router = inject(Router);

  constructor(private usuarioService: UsuarioService) {}

  onTipoUsuarioChange() {
    console.log("Tipo de usuário selecionado:", this.tipoUsuario);
  }

  cadastrar() {
    if (this.nomeUsuario === '' || this.cpf === '' || this.senha === '') {
      console.log("Preencha os dados do Usuário!");
      alert("Você não preencheu todos os dados do Usuário!");
    }

    
      const novoUsuario: Usuario = {
        idUsuario: 0,
        nomeUsuario: this.nomeUsuario,
        cpf: this.cpf,
        senha: this.senha,
        tipoUsuario: this.tipoUsuario

      }

      
      this.usuarioService.criarUsuario(novoUsuario).subscribe({
        next: (res) => {
          console.log(`Usuário ${res.nomeUsuario} cadastrado com sucesso!`);
          this.usuarioCadastrado = true;
          console.log("Resposta", res)
        
          setTimeout(() => {
            this.router.navigate(['/biblioteca/usuarios']);
          }, 2000);
        },
        error: (erro) => {
          console.error("Erro ao cadastrar o usuário:", erro);
          alert("Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
        }
  });
    }
  
}
