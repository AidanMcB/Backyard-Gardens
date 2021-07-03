import { Component, OnDestroy, OnInit } from '@angular/core';
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

    public submit(e): void {
        e.preventDefault();
        // this.formData = formData
        console.log(this.form)
    }

    public onSubmit() {
    const formData: UserProfile = {
        username: this.username,
        password: this.password
    }
    this.loginSub = this._userService.loginUser(formData).subscribe( (response: any) => {
          localStorage.setItem("jwt", response.Token);
          this.invalidLogin = false;
          this._router.navigate(["/"]);
        }, err => {
            console.log(err)
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
        // this.sub.unsubscribe();
        // this.sub2.unsubscribe();
        this.loginSub.unsubscribe();
    }
}
