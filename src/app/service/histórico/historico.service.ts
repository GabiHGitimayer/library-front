import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historico } from '../../models/historico.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private apiUrl = 'http://localhost:8080/biblioteca/historico';

  constructor(private http: HttpClient) {}

  listarHistorico(usuarioId: number): Observable<Historico[]> {
    return this.http.get<Historico[]>(`${this.apiUrl}/${usuarioId}`);
  }
}