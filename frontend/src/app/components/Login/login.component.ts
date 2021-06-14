import { Component } from '@angular/core';
import { UserProfile } from './user.interfaces';
import { DataService } from '../../data.service';
import { FormControl } from '@angular/forms';
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
    public username: string;
    public password: string;

    public submit(e): void {
        e.preventDefault();
        // this.formData = formData
        console.log(this.formData)
    }

    public logData(): void {
        this._dataService.getPosts().subscribe( 
            (posts) => {
                console.log(posts);
            }
        )
    }
}
