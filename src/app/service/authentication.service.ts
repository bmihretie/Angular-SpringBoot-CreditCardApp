
import { Injectable } from '@angular/core'; 
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';
import { ConfirmationDailogComponent } from '../confirmation-dailog/confirmation-dailog.component';

export class User{
  constructor(public status:string,) {}
  
}

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  userNamePasswordMatch:boolean = true;
  isUserNameExist!: boolean;
  logoutDialogResult!:boolean;

  constructor(
    private httpClient:HttpClient,private dialog:MatDialog
  ) {}

  // it controls the authentication of each customer login
  // based on user name and password and sets the login session
  authenticate(username: string, password: string) {
    
    console.log(username);
    console.log(password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<boolean>(`https://creditcreate1-be-docker.azurewebsites.net/account/login?username=${username}&password=${password}`,{headers}).pipe(
    map(
       userData => {
        if(userData === this.userNamePasswordMatch){
          sessionStorage.setItem('username',username);
          console.log(userData);
        }
        else{
          console.log(userData);
          alert("username or password doesn't match, please try again");
        }
      
          return userData;
       }
     )

    );
  }

 // if the user logged in set the login session
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  // get the username during login to be used by other components
  // to get specific data based on specific username
  getUsername(){
    return sessionStorage.getItem('username')
  }

  // when we log out remove the login session 
  logOut() {
     sessionStorage.removeItem('username');
  }

  
}