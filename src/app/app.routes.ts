import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioCadastroComponent } from './components/usuarios/usuario-cadastro/usuario-cadastro.component';
import { LivrosComponent } from './components/livros/livros.component';
import { LivroCadastroComponent } from './components/livros/livro-cadastro/livro-cadastro.component';
import { EmprestimoCadastroComponent } from './components/emprestimos/emprestimo-cadastro/emprestimo-cadastro.component';
import { EmprestimosComponent } from './components/emprestimos/emprestimos.component';
import { LivroEditarComponent } from './components/livros/livro-editar/livro-editar.component';
import { UsuarioEditarComponent } from './components/usuarios/usuario-editar/usuario-editar.component';
import { adminFuncionarioGuard } from './guard/adminFuncionario.guard';
import { adminGuard } from './guard/admin.guard';


export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "auth/login", component: LoginComponent },
    { path: "biblioteca", component: BibliotecaComponent },
    { path: "biblioteca/usuarios", component: UsuariosComponent, canActivate: [adminFuncionarioGuard] },
    { path: "biblioteca/livros", component: LivrosComponent },
    { path: "biblioteca/emprestimos", component: EmprestimosComponent},
    { path: "biblioteca/usuarios/cadastro", component: UsuarioCadastroComponent, canActivate: [adminFuncionarioGuard] },
    { path: "biblioteca/livros/cadastro", component: LivroCadastroComponent, canActivate: [adminFuncionarioGuard] },
    { path: "biblioteca/emprestimos/cadastro", component: EmprestimoCadastroComponent, canActivate: [adminFuncionarioGuard] },
    { path: "biblioteca/usuarios/editar/:id", component: UsuarioEditarComponent, canActivate: [adminGuard] },
    { path: "biblioteca/livros/editar/:id", component: LivroEditarComponent, canActivate: [adminFuncionarioGuard] },
];
