import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    public loginservice:AuthenticationService) { }

  username!:string;
  password!:string;
  invalidLogin = false;

  ngOnInit(): void {
    
  }

  // a function that controlls the login using username and password
  // as an input using http client authentication
  verify(){
  
  (this.loginservice.authenticate(this.username, this.password).subscribe(
    data => {
      this.router.navigate(['display'])
      this.invalidLogin = false
    },
    error => {
      this.invalidLogin = true;
     alert("username or password doesn't match, please try again");

    })
  );

}

}
