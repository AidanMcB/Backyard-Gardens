import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) { }
getPosts() {
    return this.httpClient
    .get('https://jsonplaceholder.typicode.com/posts')
  }

//   getEntities(): Observable<Entity[]> {
//     return this.httpClient.get<Entity[]>(this.apiUrl)     
// }

}

