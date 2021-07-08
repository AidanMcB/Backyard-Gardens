import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../config/authentication.service';
import { RegistrationForm } from '../Login/user.interfaces'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public username: string;
  public email: string;
  public password: string;
  public errors: string[];
  public returnUrl: string;
  public formData: RegistrationForm;

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {

  }

  public onSubmit() {
    this.fillForm();
    this.errors = [];
    this.authentication.register(this.formData).subscribe(() => {
    }, (error: HttpErrorResponse) => {
        console.log(error.error)
      if (error.error instanceof Array) {
        this.errors = error.error.map(m => m.description);
      }
      else {
        this.errors = [error.error.message];
        console.log(this.errors)
      }
    //   this.loginState = ClrLoadingState.ERROR;
    });
  }

  public fillForm() {
    this.formData = {
      username: this.username,
      email: this.email,
      password: this.password
    }
  }
}