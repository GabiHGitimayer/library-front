import { Injectable } from "@angular/core";
import { environment } from "../../../enviroment/enviroment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login, LoginResponseDTO, Register } from "../../models/auth.model";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { ApiRequest } from '../apiRequest';
import { User, userType } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private apiRequest: ApiRequest, private http: HttpClient) {}

  realizarAuth(login: Login): Observable<LoginResponseDTO> {
    const response = this.http.post<LoginResponseDTO>(`${this.apiUrl}/login`, login);
    console.log("Response: ", response);
    
    return response;
  }

  
  registrarAuth(register: Register): Observable<Register> {
    const config = {
      method: 'POST', 
      body: register
    }    
    return this.apiRequest.apiRequest<Register>(`${this.apiUrl}/register`, config)
  }

  getToken() {
    if (typeof window !== 'undefined' && localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  }

  jwtDecode() {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode<JwtPayload>(token);
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
      }
    }
    return null;
  }

  hasPermission(...tiposPermitidos: userType[]): boolean {
    const user = this.jwtDecode() as User;
    return tiposPermitidos.includes(user.userType);
  }

  hasAdminOrFuncionarioPermission(): boolean {
    const user = this.jwtDecode() as User;
    return user.userType === userType.ADMIN || user.userType === userType.FUNCIONARIO;
  }
}