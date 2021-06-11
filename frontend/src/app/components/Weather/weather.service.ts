import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) { }
  getWeather() {
    return this.httpClient
    .get('https://localhost:5001/weatherforecast')
  }
  getGarden() {
    return this.httpClient
    .get('https://localhost:5001/api/garden')
  }


//   getEntities(): Observable<Entity[]> {
//     return this.httpClient.get<Entity[]>(this.apiUrl)     
// }

}

