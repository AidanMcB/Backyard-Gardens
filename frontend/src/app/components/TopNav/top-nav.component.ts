import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../config/authentication.service";
import { UserService } from "../Login/user.service";

@Component({
    selector: 'top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
})

export class TopNavComponent {

    public loggedInUserName: string; 

    constructor(
        private authentication: AuthenticationService, 
        private _userService: UserService,
        private router: Router
    ) {}

    public ngOnInit(): void {
        localStorage.getItem('userName') != null ? this.loggedInUserName = localStorage.getItem('userName') : null;
    }

    public logout(): void {
        localStorage.clear();
        this._userService.logout().subscribe((res) => {
            localStorage.clear();
        }, (err) => console.log(err))
    }

    public user(): void {
        console.log(localStorage)
        this._userService.getCurrentUser().subscribe((res) => {
            console.log(res)
        }, (err) => console.log(err))
    }
}