import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { environment } from '../../../enviroment/enviroment';
import { LocalStorageService } from '../LocalStorage/localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {}

  listarUsuarios(): Observable<User[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User[]>(`${this.apiUrl}`, { headers });
  }

  getUsuarioById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  atualizarUsuario(id: number, usuario: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, usuario);
  }

  deletarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}