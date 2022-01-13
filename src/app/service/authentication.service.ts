
import { Injectable } from '@angular/core';
//import { HttpclientService } from './httpclient.service'; 
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(public status:string,) {}
  
}

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) {}

  authenticate(username: string, password: string) {
    // if (username === "username" && password === "password") {
    //   sessionStorage.setItem('username', username)
    //   return true;
    // } else {
    //   return false;
    // }
    // console.log(username);
    // console.log(password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('https://creditgroup1-spring-docker.azurewebsites.net/customer/validateLogin',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        // let authString = 'Basic ' + btoa(username + ':' + password);
        // sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}