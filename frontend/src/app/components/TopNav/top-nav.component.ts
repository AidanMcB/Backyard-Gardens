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
    constructor(
        private authentication: AuthenticationService, 
        private _userService: UserService,
        private router: Router) { }


    public logout(): void {
        localStorage.removeItem("jwt");
        this._userService.logout().subscribe((res) => {
            console.log(res)
        }, (err) => console.log(err))
    }

    public user(): void {
        // let x  = localStorage.getItem("jwt")
        // localStorage.setItem("this", "thakjhkjhvkt")
        let x = localStorage.getItem("jwt")
        console.log(x);
    }
}