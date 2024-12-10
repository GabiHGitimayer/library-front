export class Fine {
    fineId: number | null;
    loan: Loan;
    fineValue: number;
    calculationDate: Date;
  
    constructor(fineId: number | null, loan: Loan, fineValue: number, calculationDate: Date) {
      this.fineId = fineId;
      this.loan = loan;
      this.fineValue = fineValue;
      this.calculationDate = calculationDate;
    }
  }
  
  export class Loan {
    loanId: number | null;
    efectiveReturnDate: Date;
  
    constructor(loanId: number | null, efectiveReturnDate: Date) {
      this.loanId = loanId;
      this.efectiveReturnDate = efectiveReturnDate;
    }
  }
  