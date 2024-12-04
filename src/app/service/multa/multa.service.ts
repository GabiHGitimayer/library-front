import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Multa } from '../../models/multa.model';
import { environment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class MultaService {
  private apiUrl = `${environment.apiUrl}/biblioteca/multas`;

  constructor(private http: HttpClient) {}

  calcularMulta(idEmprestimo: number): Observable<Multa> {
    return this.http.post<Multa>(`${this.apiUrl}/calcular/${idEmprestimo}`, {});
  }

}
