import { Livro } from "./livro.model";
import { User } from "./user.model";

export class Emprestimo {
    idEmprestimo: number;
    usuario: User;
    livro: Livro;
    dataEmprestimo: Date;
    dataDevolucao: Date;
    dataDevolucaoEfetiva: Date;
    statusEmprestimo: string;

    constructor(idEmprestimo: number, usuario: User, livro: Livro, dataEmprestimo: Date, dataDevolucao: Date, dataDevolucaoEfetiva: Date, statusEmprestimo: string) {
        this.idEmprestimo = idEmprestimo;
        this.usuario = usuario;
        this.livro = livro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
        this.statusEmprestimo = statusEmprestimo;
    }
}