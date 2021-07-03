import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {
    constructor(
        private jwtHelper: JwtHelperService,
        private router: Router
    ) {}

    title = 'homepage';

    isUserAuthenticated() {
        const token: string = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
          return true;
        }
        else {
          return false;
        }
      }

    public readonly carouselImages = [
        {path: '../../../assets/cabbage-garden.jpeg'},
        {path: '../../../assets/raised-garden.jpeg'},
        {path: '../../../assets/strawberry-garden.jpeg'},
        {path: '../../../assets/tomato-greenhouse.jpeg'},
        {path: '../../../assets/tree-fruit.jpeg'},
        {path: '../../../assets/pumpkins.jpeg'},
    ]
}