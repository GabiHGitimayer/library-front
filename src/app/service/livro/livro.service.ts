import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../../models/livro.model';
import { environment } from '../../../enviroment/enviroment';
import { ApiRequest } from '../apiRequest';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private apiUrl = `${environment.apiUrl}/books`;

  constructor(private apiRequest: ApiRequest, private http: HttpClient) {}

  criarLivro(livro: Livro): Observable<Livro> {
    const config = {
      method: 'POST', 
      body: livro
    }
    return this.apiRequest.apiRequest<Livro>(`${this.apiUrl}/`, config);
  }

  listarLivros(): Observable<Livro[]> {
    const config = {
      method: 'GET',
    }
    return this.apiRequest.apiRequest<Livro[]>(`${this.apiUrl}`, config);
  }

  getLivroById(id: number): Observable<Livro> {
    const config = {
      method: 'GET',
    }
    return this.apiRequest.apiRequest<Livro>(`${this.apiUrl}/${id}`, config);
  }

  atualizarLivro(id: number, livro: Livro): Observable<Livro> {
    const config = {
      method: 'PUT',
      body: livro
    }
    return this.apiRequest.apiRequest<Livro>(`${this.apiUrl}/${id}`, config);
  }

  deletarLivro(id: number): Observable<void> {
    const config = {
      method: 'DELETE',
    }
    return this.apiRequest.apiRequest<void>(`${this.apiUrl}/${id}`, config);
  }
}