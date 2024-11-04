export enum TipoUsuario {
    ADMIN = 'ADMIN',
    FUNCIONARIO = 'FUNCIONARIO',
    USUARIO = 'USUARIO'
}

export class Usuario {
    idUsuario: number;
    nomeUsuario: string;
    cpf: string;
    senha: string;
    tipoUsuario: TipoUsuario;

    constructor(idUsuario: number, nomeUsuario: string, cpf: string, senha: string, tipoUsuario: TipoUsuario) {
        this.idUsuario = idUsuario;
        this.nomeUsuario = nomeUsuario;
        this.cpf = cpf;
        this.senha = senha;
        this.tipoUsuario = tipoUsuario;
    }
}