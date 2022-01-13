import { Component } from "@angular/core";
import { AuthenticationService } from '../service/authentication.service';
@Component({
    selector:'pm-home',
    templateUrl: './home.component.html'
})

export class HomeComponent{

    constructor(private authService: AuthenticationService) { }
    isLoggedIn = this.authService.isUserLoggedIn()
    pageTitle: string = 'Credit Account Application - Group 1';
}

