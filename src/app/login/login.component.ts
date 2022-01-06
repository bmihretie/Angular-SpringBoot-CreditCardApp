import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  // constructor(private router:Router,
  //   public loginservice:AuthenticateService) { }

  username!:string;
  pass!:string;
  invalidLogin = false;

  ngOnInit(): void {
  }

  verify(){
    console.log("login successful");
    // if(this.loginservice.authenticate(this.username,this.passs)){
    //   this.router.navigate(['']);
    //   this.invalidLogin = false;
    // }
    // else{
    //   this.invalidLogin = true;
    // }
  }

}
