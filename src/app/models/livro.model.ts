export class Livro {
    idLivro: number;
    titulo: string;
    autor: string;
    genero: string;
    isbn: string;
    anoPublicacao: number;
    quantExemplares: number;

    constructor(idLivro: number, titulo: string, autor: string, genero: string, isbn: string, anoPublicacao: number, quantExemplares: number) {
        this.idLivro = idLivro;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.isbn = isbn;
        this.anoPublicacao = anoPublicacao;
        this.quantExemplares = quantExemplares;
    }
}