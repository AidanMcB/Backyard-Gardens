import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { UserProfile } from './user.interfaces';
import { DataService } from '../../data.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { passwordValidator, usernameValidator } from '../../shared/validators/login.validator';
import { WeatherService } from '../Weather/weather.service';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy{
    
    public constructor(
        private _dataService: DataService,
        private _userService: UserService,
        private _weatherService: WeatherService,
        private _router: Router,
        private _httpService: HttpClient
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
            usernameControl: new FormControl(this.username, [Validators.required, usernameValidator]),
            passwordControl: new FormControl( this.password )
        })
        
    }

    public getAllUsers(): void {
        // this._userService.getAllUser().subscribe(users =>{
        //     console.log(users)
        // })
        this._httpService.get("http://localhost:5000/api/auth", {
            headers: new HttpHeaders({
              "Content-Type": "application/json"
            })
          }).subscribe(response => {
            console.log(response)
          }, err => {
            console.log(err)
          });
        
    }

    public onSubmit() {
    const formData: UserProfile = {
        username: this.username,
        password: this.password
    }
    this.loginSub = this._userService.loginUser(formData).subscribe( (response: any) => {
        console.log('Response from login: ', response)
          localStorage.setItem("jwt", response.Token);
          this._setUserObjectInLocalStorage(response);
          this.invalidLogin = false;
          this._router.navigate(["/"]);
        }, err => {
            console.log(err)
          this.invalidLogin = true;
        });
    }

    callApi() {
        console.log(localStorage.userId)
        //this.sub = this._weatherService.getWeather().subscribe( weather => console.log(weather));
    }

    public logData(): void {
        this.sub2 = this._weatherService.getGarden().subscribe(garden => console.log(garden))
    }

    ngOnDestroy() {
        this.loginSub.unsubscribe();
    }

    private _setUserObjectInLocalStorage(loginResponse) {
        let userObj = loginResponse.user;
        Object.keys(userObj).map(function(key, index) {
            key == 'Id' ? localStorage.setItem("userId", userObj[key].toString()) :
            key == 'UserName' ? localStorage.setItem("userName", userObj[key].toString()) :
            userObj[key] != null ?
            localStorage.setItem(`${key}`, userObj[key].toString())
            : null;
        });

    }
}
