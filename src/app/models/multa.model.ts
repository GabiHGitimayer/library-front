import { Emprestimo } from "./emprestimo.model";

export class Multa {
    idMulta: number;
    emprestimo: Emprestimo[];
    valorMulta: number;
    dataCalculo: Date;

    constructor(idMulta: number, emprestimo: Emprestimo[], valorMulta: number, dataCalculo: Date) {
        this.idMulta = idMulta;
        this.emprestimo = emprestimo;
        this.valorMulta = valorMulta;
        this.dataCalculo = dataCalculo;
    }
}