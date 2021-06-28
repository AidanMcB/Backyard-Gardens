import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserProfile } from './user.interfaces';
import { DataService } from '../../data.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { passwordValidator, usernameValidator } from '../../shared/validators/login.validator';
import { WeatherService } from '../Weather/weather.service';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy{
    router: any;

    public constructor(
        private _dataService: DataService,
        private _userService: UserService,
        private _weatherService: WeatherService
    ) {}

    title = 'login';
    public username: string;
    public password: string;
    public form: FormGroup;
    public invalidLogin: boolean = false;
    sub!: Subscription;
    sub2!: Subscription;
    loginSub!: Subscription;

    ngOnInit(): void {
        this.form = new FormGroup({
            nameControl: new FormControl(this.username, [Validators.required, usernameValidator]),
            passwordControl: new FormControl( this.password, passwordValidator)
        })
        
    }

    public submit(e): void {
        e.preventDefault();
        // this.formData = formData
        console.log(this.form)
    }

    login(form: NgForm) {
    this.loginSub = this._userService.loginUser(form).subscribe(response => {
          const token = (<any>response).token;
          localStorage.setItem("jwt", token);
          this.invalidLogin = false;
          this.router.navigate(["/"]);
        }, err => {
          this.invalidLogin = true;
        });
    }

    callApi() {
        this.sub = this._weatherService.getWeather().subscribe( weather => console.log(weather));
    }

    public logData(): void {
        this.sub2 = this._weatherService.getGarden().subscribe(garden => console.log(garden))
        
        // this._dataService.getPosts().subscribe( 
        //     (posts) => {
        //         console.log(posts);
        //     }
        // )
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
        this.loginSub.unsubscribe();
    }
}
