import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historico } from '../../models/historico.model';
import { environment } from '../../../enviroment/enviroment';


@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private apiUrl = `${environment.apiUrl}/history`;

  constructor(private http: HttpClient) {}

  listarHistorico(usuarioId: number): Observable<Historico[]> {
    return this.http.get<Historico[]>(`${this.apiUrl}/${usuarioId}`);
  }
}