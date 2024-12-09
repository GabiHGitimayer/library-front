export class Livro {
    bookId: number;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    publicationYear: number;
    copiesQuantity: number;

    constructor(bookId: number, title: string, author: string, genre: string, isbn: string, publicationYear: number, copiesQuantity: number) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isbn = isbn;
        this.publicationYear = publicationYear;
        this.copiesQuantity = copiesQuantity;
    }
}

export type registerBooks = {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    publicationYear: number;
    copiesQuantity: number;
}