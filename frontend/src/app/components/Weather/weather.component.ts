import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Forecast } from './weather.interface';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {
    title = 'weather';

    public weeklyForecast:Forecast[] = [];

    public constructor (
        private _weatherService: WeatherService,
    ) {}

    public ngOnInit(): void {
        this._weatherService.getWeather().subscribe( 
            (weather: Forecast[]) => {
                weather.forEach( forecast => this.weeklyForecast.push(forecast))
            }
        )
    }


    public getWeather(): void {
       console.log(this.weeklyForecast)
    }
}
