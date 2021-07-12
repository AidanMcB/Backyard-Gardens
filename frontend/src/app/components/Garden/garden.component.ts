import { Component } from '@angular/core';
import { UserProfile } from '../Login/user.interfaces';
import { DataService } from '../../data.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { passwordValidator, usernameValidator } from '../../shared/validators/login.validator';
import { WeatherService } from '../Weather/weather.service';
import { Subscription } from 'rxjs';
import { UserService } from '../Login/user.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GardenService } from './garden.service';

@Component({
    selector: 'garden',
    templateUrl: './garden.component.html',
    styleUrls: ['./garden.component.scss']
})

export class GardenComponent {
    
    public constructor(
        private _dataService: DataService,
        //private _userService: UserService,
        private _gardenService: GardenService,
        private _weatherService: WeatherService,
        private _router: Router,
        private _httpService: HttpClient
    ) {}

    public createNewGarden(): void {
        this._gardenService.createNewGarden().subscribe( newGarden => {
            console.log(newGarden);
        })
    }

    public getGardens():void {
        this._gardenService.getGarden().subscribe ( gardens => {
            console.log(gardens);
        })
    }



}
