import { Component } from "@angular/core";

@Component({
    selector: 'top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
})

export class TopNavComponent {


    public logout(): void {
        localStorage.removeItem("jwt");
    }

    public user(): void {
        // let x  = localStorage.getItem("jwt")
        // localStorage.setItem("this", "thakjhkjhvkt")
        let x = localStorage.getItem("jwt")
        console.log(x);
    }
}