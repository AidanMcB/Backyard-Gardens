import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UserProfile } from '../Login//user.interfaces';

@Injectable()
export class GardenService {

  private url: string = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) {

   }

  public createNewGarden() {
      let garden = { GardenName: 'Isabellas Garden', GardenId: 123, UserId: 123, 
    DateStarted: '1', PhotoFileName: '2'}
    //const credentials = JSON.stringify(formData);
    return this.httpClient.post(`https://localhost:5001/api/garden/CreateNewGarden`, garden)
  }

  public getGarden() {
    //const credentials = JSON.stringify(formData);
    return this.httpClient.get(`https://localhost:5001/api/garden`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
  
}
