import { Livro } from "./livro.model";
import { User } from "./user.model";

export class Emprestimo {
    loanId: number;
    userId: User;
    bookId: Livro;
    loanDate: Date;
    returnDate: Date;
    efectiveReturnDate: Date;
    loanStatus: string;

    constructor(loanId: number, userId: User, bookId: Livro, loanDate: Date, returnDate: Date, efectiveReturnDate: Date, loanStatus: string) {
        this.loanId = loanId;
        this.userId = userId;
        this.bookId = bookId;
        this.loanDate = loanDate;
        this.returnDate = returnDate;
        this.efectiveReturnDate = efectiveReturnDate;
        this.loanStatus = loanStatus;
    }
}

export type realizeLoan = {
    user: User;
    book: Livro;
    loanDate: Date;
    returnDate: Date;
    efectiveReturnDate: Date;
    loanStatus: string;
}