import { TipoUsuario } from "./usuario.model";

export type LoginResponseDTO = {
    message: string;
    token: string;
}

export class Login {
    login: string;
    password: string;

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }
}

export class Register {
    name: string;
    password: string;
    email: string;
    cpf: string;
    type: TipoUsuario

    constructor(name: string, password: string, email: string, cpf: string, type: TipoUsuario) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.cpf = cpf;
        this.type = type;
    }
}