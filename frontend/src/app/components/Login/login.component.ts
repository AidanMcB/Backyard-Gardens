import { Component } from '@angular/core';
import { UserProfile } from './user.interfaces';
import { DataService } from '../../data.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    public constructor(
        private _dataService: DataService,
    ) {}

    title = 'login';
    public formData: UserProfile;

    public logData(): void {
        this._dataService.getPosts().subscribe( 
            (posts) => {
                console.log(posts);
            }
        )
    }
}
