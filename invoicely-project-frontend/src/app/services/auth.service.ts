import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, { username: usuario, password: password });
  }
}