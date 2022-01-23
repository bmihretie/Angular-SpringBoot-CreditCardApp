import { Component, OnInit } from '@angular/core';
import { ConfirmationDailogComponent } from '../confirmation-dailog/confirmation-dailog.component';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logoutDialogResult:boolean = true;
  dialogueResult!:boolean;

  constructor(public loginService:AuthenticationService,
    private router: Router,private dialog:MatDialog) { }

  ngOnInit(): void {
   
  }

  // a function that controls the logut confirmation dialgue 
  // and controls log out session based on user action
  confirmDialog(){
    const logoutDialog=  this.dialog.open(ConfirmationDailogComponent);
    width: '200px';
    height: '250px';
    logoutDialog.afterClosed().subscribe(result => {
    if(this.logoutDialogResult === result){
      this.loginService.logOut();
      this.router.navigate(['login']);
    }
   
     console.log(`Dialog result: ${result}`);
   
     });
   }



}
