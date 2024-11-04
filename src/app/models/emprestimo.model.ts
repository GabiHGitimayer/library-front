import { Livro } from "./livro.model";
import { Usuario } from "./usuario.model";

export class Emprestimo {
    idEmprestimo: number;
    usuario: Usuario[];
    livro: Livro[];
    dataEmprestimo: Date;
    dataDevolucao: Date;
    dataDevolucaoEfetiva: Date;
    statusEmprestimo: string;

    constructor(idEmprestimo: number, usuario: Usuario[], livro: Livro[], dataEmprestimo: Date, dataDevolucao: Date, dataDevolucaoEfetiva: Date, statusEmprestimo: string) {
        this.idEmprestimo = idEmprestimo;
        this.usuario = usuario;
        this.livro = livro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
        this.statusEmprestimo = statusEmprestimo;
    }
}