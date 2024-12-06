import { Injectable } from "@angular/core";
import { environment } from "../../../enviroment/enviroment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login, Register } from "../../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  realizarAuth(login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/login`, login);
  }

  //se questionarem essa porra em "auth" ao inves de "usuário", responda aqui, quem bota código com acento e em portugues? fdp
  registrarAuth(register: Register): Observable<Register> {
    return this.http.post<Register>(`${this.apiUrl}/register`, register);
  }
}