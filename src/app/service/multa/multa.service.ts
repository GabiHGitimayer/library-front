import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fine } from '../../models/multa.model';
import { environment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class MultaService {
  private apiUrl = `${environment.apiUrl}/fine`;

  constructor(private http: HttpClient) {}

  calcularMulta(idEmprestimo: number): Observable<Fine> {
    return this.http.post<Fine>(`${this.apiUrl}/calculate/${idEmprestimo}`, {});
  }

}
