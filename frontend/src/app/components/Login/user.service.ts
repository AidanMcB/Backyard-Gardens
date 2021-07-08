import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UserProfile } from './user.interfaces';

@Injectable()
export class UserService {

  private url: string = 'https://localhost:5001/api/'

  constructor(private httpClient: HttpClient) {

   }

  public loginUser(formData: UserProfile) {
    const credentials = JSON.stringify(formData);
    return this.httpClient.post(`https://localhost:5001/api/auth/login`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  public logout() {
    return this.httpClient.post(`https://localhost:5001/api/auth/logOut`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  public getAllUser() {
    return this.httpClient.get(`https://localhost:5001/api/auth/`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  public getGarden() {
    return this.httpClient
    .get('https://localhost:5001/api/garden')
  }

}

