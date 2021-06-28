import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable()
export class UserService {

  private url: string = 'https://localhost:5001/api/'

  constructor(private httpClient: HttpClient) {

   }

  loginUser(formData: NgForm) {
    const credentials = JSON.stringify(formData.value);
    return this.httpClient.post(`https://localhost:5001/api/auth/login`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  getGarden() {
    return this.httpClient
    .get('https://localhost:5001/api/garden')
  }

}

