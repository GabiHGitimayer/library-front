import { Injectable } from "@angular/core";
import { environment } from "../../../enviroment/enviroment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login, LoginResponseDTO, Register } from "../../models/auth.model";
import { ApiRequest } from '../apiRequest';

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
}