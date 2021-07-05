import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../config/authentication.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { passwordValidator, usernameValidator } from '../../shared/validators/login.validator';
import { WeatherService } from '../Weather/weather.service';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public username: string;
  public password: string;
  public errors: string[];
  public returnUrl: string;

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {

  }

  public onSubmit() {
    this.errors = [];
    this.authentication.register(this.username, this.password).subscribe(() => {
    }, (error: HttpErrorResponse) => {
      if (error.error instanceof Array) {
        this.errors = error.error.map(m => m.description);
      }
      else {
        this.errors = [error.error.message];
      }
    //   this.loginState = ClrLoadingState.ERROR;
    });
  }
}