
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

  userNamePasswordMatch = true;
  isUserNameExist!: boolean;

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
    console.log(username);
    console.log(password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   // this.isUserNameExist = this.httpClient.get<boolean>(`https://creditcreate1-be-docker.azurewebsites.net/account/login?username=${username}&password=${password}`,{headers});
    return this.httpClient.get<boolean>(`https://creditcreate1-be-docker.azurewebsites.net/account/login?username=${username}&password=${password}`).pipe(
    //return this.httpClient.get(`https://creditcreate1-be-docker.azurewebsites.net/account/login?username=${username}&password=${password}`).pipe(
    
    map(
       userData => {
        if(userData === this.userNamePasswordMatch){
          sessionStorage.setItem('username',username);
          console.log(userData);
        }
        else{
          console.log(userData);
          alert("Here is the user data: "+userData);
        }
        
        // let authString = 'Basic ' + btoa(username + ':' + password);
        // sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     )

    );
  }

  



  // authenticate(username: string, password: string) {
  //   // if (username === "username" && password === "password") {
  //   //   sessionStorage.setItem('username', username)
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  //   // console.log(username);
  //   // console.log(password);
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.httpClient.get<User>(`https://creditcreate1-be-docker.azurewebsites.net/account/login?username=${username}&password=${password}`,{headers}).pipe(
  //    map(
  //      userData => {
  //       sessionStorage.setItem('username',username);
  //       // let authString = 'Basic ' + btoa(username + ':' + password);
  //       // sessionStorage.setItem('basicauth', authString);
  //       return userData;
  //      }
  //    )

  //   );
  // }

  





  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user === null)
  }

  getUsername(){
    return sessionStorage.getItem('username')
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}