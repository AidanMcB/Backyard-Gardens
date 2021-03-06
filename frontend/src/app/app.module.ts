import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/Homepage/homepage.component';
import { WeatherComponent} from './components/Weather/weather.component';
import { LoginComponent } from './components/Login/login.component';


import { IvyCarouselModule} from 'angular-responsive-carousel'; 
import { DataService } from './data.service';
import { WeatherService } from './components/Weather/weather.service';
import { UserService } from './components/Login/user.service';
import { TopNavComponent } from './components/TopNav/top-nav.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './components/Gaurds/auth-gaurd.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'weather', component: WeatherComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

export function tokenGetter() {
  return localStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    WeatherComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001", "localhost:4200"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    DataService,
    UserService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
