import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { environment } from '../../../enviroment/enviroment';
import { ApiRequest } from '../apiRequest';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/user`;

  constructor(private apiRequest: ApiRequest, private http: HttpClient) {}

  listarUsuarios(): Observable<User[]> {
    const config = {
      method: "GET"
    }

    return this.apiRequest.apiRequest<User[]>(`${this.apiUrl}`, config);
  }

  listarUsuariosPeloID(id:number): Observable<User> {
    const config = {
      method: "GET"
    }
    return this.apiRequest.apiRequest<User>(`${this.apiUrl}/${id}`, config);
  }
  

  
  //PUT E DELETE SEM O "CONFIG"
  atualizarUsuario(id: number, usuario: User): Observable<User> {
    return this.apiRequest.apiRequest<User>(`${this.apiUrl}/${id}`, { method: 'PUT', body: usuario });
  }
  
  deletarUsuario(id: number): Observable<void> {
    return this.apiRequest.apiRequest<void>(`${this.apiUrl}/${id}`, { method: 'DELETE' });
  }  
}