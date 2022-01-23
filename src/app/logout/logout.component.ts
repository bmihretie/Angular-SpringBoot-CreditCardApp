
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';
import { ConfirmationDailogComponent } from '../confirmation-dailog/confirmation-dailog.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  logoutDialogResult:boolean = true;

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,private dialog:MatDialog) {

  }
   
 
  ngOnInit() {
    //this.confirmDialog();
    alert("Are you sure you want to log out?");
    this.authenticationService.logOut();
    this.router.navigate(['login']);
    
  }

  confirmDialog(){

    const logoutDialog=  this.dialog.open(ConfirmationDailogComponent);
     
    width: '150px';
    height: '200px';
    logoutDialog.afterClosed().subscribe(result => {
      if(this.logoutDialogResult == result){
        this.authenticationService.logOut();
        this.router.navigate(['login']);
      }

    console.log(`Dialog result: ${result}`);
    console.log(`Dialog logoutDialogResult: ${this.logoutDialogResult}`);
     });
   }




}


