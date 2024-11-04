import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Multa } from '../../models/multa.model';

@Injectable({
  providedIn: 'root'
})
export class MultaService {
  private apiUrl = 'http://localhost:8080//biblioteca/multa';

  constructor(private http: HttpClient) {}

  calcularMulta(emprestimoId: number): Observable<Multa> {
    return this.http.post<Multa>(`${this.apiUrl}/calcular/${emprestimoId}`, null);
  }

  atualizarMulta(id: number, multa: Multa): Observable<Multa> {
    return this.http.put<Multa>(`${this.apiUrl}/atualizar/${id}`, multa);
  }
}