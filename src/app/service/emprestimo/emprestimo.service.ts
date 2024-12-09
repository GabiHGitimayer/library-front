import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emprestimo, realizeLoan } from '../../models/emprestimo.model';
import { environment } from '../../../enviroment/enviroment';
import { ApiRequest } from '../apiRequest';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  private apiUrl = `${environment.apiUrl}/loans`;

  constructor(private apiRequest: ApiRequest, private http: HttpClient) {}

  realizarEmprestimo(emprestimo: realizeLoan): Observable<Emprestimo> {
    const config = {
      method: "POST",
      body: emprestimo
    }

    return this.apiRequest.apiRequest<Emprestimo>(`${this.apiUrl}`, config);
  }

  atualizarEmprestimo(id: number, emprestimo: realizeLoan): Observable<Emprestimo> {
    const config = {
      method: "PUT",
      body: emprestimo,
    }

    return this.apiRequest.apiRequest<Emprestimo>(`${this.apiUrl}/${id}`, config);
  }

  listarEmprestimos(): Observable<Emprestimo[]> {
    const config = {
      method: "GET"
    }

    return this.apiRequest.apiRequest<Emprestimo[]>(`${this.apiUrl}`, config)
  }

  //nós temos esse endpoint aqui? não temos uma service de devolver empréstimo pelo que eu me lembre Tem sim
  devolverEmprestimo(id: number): Observable<Emprestimo> {
    const config = {
      method: "POST"
    }
    
    return this.apiRequest.apiRequest<Emprestimo>(`${this.apiUrl}/return/${id}`, config)
  }
}
