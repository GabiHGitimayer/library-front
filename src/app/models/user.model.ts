export enum userType {
    ADMIN = 'ADMIN',
    FUNCIONARIO = 'FUNCIONARIO',
    USUARIO = 'USUARIO'
}

export class User {
    userId: number;
    userName: string;
    userCpf: string;
    userPassword: string;
    userType: userType;

    constructor(userId: number, userName: string, userCpf: string, userPassword: string, userType: userType) {
        this.userId = userId;
        this.userName = userName;
        this.userCpf = userCpf;
        this.userPassword = userPassword;
        this.userType = userType;
    }
}