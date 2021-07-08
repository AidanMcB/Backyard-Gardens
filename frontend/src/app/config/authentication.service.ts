import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegistrationForm } from '../components/Login/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public register(newUser: RegistrationForm): Observable<void> {
    return this.http.post<void>(`https://localhost:5001/api/authentication/register`, newUser);
  }
}