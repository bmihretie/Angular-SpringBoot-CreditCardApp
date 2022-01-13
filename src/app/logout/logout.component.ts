
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    alert("Are you sure you want to log out?");
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }

}


