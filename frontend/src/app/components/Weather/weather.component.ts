import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {
    title = 'weather';

    public constructor (
        private _weatherService: WeatherService,
    ) {}


    public getWeather(): void {
        this._weatherService.getWeather().subscribe( 
            (weather) => {
                console.log(weather)
            }
        )
    }
}
