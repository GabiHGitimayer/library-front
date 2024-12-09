import { Emprestimo } from "./emprestimo.model";
import { Livro } from "./livro.model";
import { Usuario } from "./user.model";

export class Historico {
    idHistorico: number;
    usuario: Usuario[];
    livro: Livro[];
    emprestimo: Emprestimo[];
    // devolucao: Devolucao[];

    constructor(idHistorico: number, usuario: Usuario[], livro: Livro[], emprestimo: Emprestimo[]) {
        this.idHistorico = idHistorico;
        this.usuario = usuario;
        this.livro = livro;
        this.emprestimo = emprestimo;
    }
}