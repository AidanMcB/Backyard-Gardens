import { Component } from '@angular/core';

@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {
    title = 'homepage';

    public readonly carouselImages = [
        {path: '../../../assets/cabbage-garden.jpeg'},
        {path: '../../../assets/raised-garden.jpeg'},
        {path: '../../../assets/strawberry-garden.jpeg'},
        {path: '../../../assets/tomato-greenhouse.jpeg'},
        {path: '../../../assets/tree-fruit.jpeg'},
        {path: '../../../assets/pumpkins.jpeg'},
    ]
}