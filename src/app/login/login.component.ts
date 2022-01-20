import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }

  constructor(private router:Router,
    public loginservice:AuthenticationService) { }

  username!:string;
  password!:string;
  invalidLogin = false;

  ngOnInit(): void {
    
  }

  verify(){
  //   console.log("login successful");
  //   if(this.loginservice.authenticate(this.username,this.password)){
  //     this.router.navigate(['/display']); 
  //     //routerLink="/display"
  //     this.invalidLogin = false;
  //   }
  //   else{
  //     this.invalidLogin = true;
  //   }
  // }

  (this.loginservice.authenticate(this.username, this.password).subscribe(
    data => {
      this.router.navigate(['display'])
      this.invalidLogin = false
    },
    error => {
      this.invalidLogin = true;
     alert("username or password doesn't match, please try again");

    }
  )
  );

}

}
