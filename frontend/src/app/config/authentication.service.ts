import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public register(username: string, password: string): Observable<void> {
    return this.http.post<void>(`https://localhost:5001/api/authentication/register`, { username, password });
  }
}