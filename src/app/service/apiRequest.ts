import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRequest {
  constructor(private http: HttpClient) {}

  apiRequest<T>(
    apiUrl: string,
    config: { method: string; body?: any; headers?: HttpHeaders }
  ): Observable<T> {
    const token = localStorage.getItem('token');
    const headers = (config.headers || new HttpHeaders()).set('Authorization', `Bearer ${token}`);

    return this.http.request<T>(config.method, apiUrl, {
      headers,
      body: config.body,
    });
  }
}
