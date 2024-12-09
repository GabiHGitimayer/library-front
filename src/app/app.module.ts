import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmprestimosComponent } from '../../src/app/components/emprestimos/emprestimos.component';
import { UsuariosComponent } from '../../src/app/components/usuarios/usuarios.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LivrosComponent } from './components/livros/livros.component';

import { EmprestimoService } from '../../src/app/service/emprestimo/emprestimo.service';
import { UsuarioService } from '../../src/app/service/usuario/usuario.service';
import { LivroService } from '../../src/app/service/livro/livro.service';
import { MultaService } from '../../src/app/service/multa/multa.service';
import { HistoricoService } from '../../src/app/service/histórico/historico.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponent,
    NavbarComponent
  ],
  providers: [
    EmprestimoService,
    UsuarioService,
    LivroService,
  ],
})
export class AppModule {}
