
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer, HttpclientService } from '../service/httpclient.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // validateForm!:FormGroup

  pinfoSection = true;
  empSection = false;
  isSecondary=false;

  user:Customer = new Customer("",0, 0,0,"","","","","","","","","","","","","","","");
 

  userInfo!:{
    fname:string,
    mname:string | null,
    lname:string,
    dob:string,
    ssn:number,
    address:string,
    cname:string,
    phoneno:string,
    salary:number,
    feild:string,
    emplen:number
  }

  contacts!: {c1Name:string,c1Phone:string,c2Name:string,c2Phone:string};
  secondary!: string | null;

  constructor(private httpClientService: HttpclientService) { }

  ngOnInit(): void {

    // this.validateForm= new FormGroup({

    //   'userInfo.fname': new FormControl(null,Validators.required),

    // })
  }

  
  toEmpSection(){

    this.pinfoSection = false;
    this.empSection = true;

  }

  onBack(){

    this.pinfoSection = true;
    this.empSection = false;
  }

  createCustomerCredit(): void {
    this.httpClientService.createCustomerCredit(this.user)
        .subscribe( data => {
          alert("Credit Application created successfully.");
        });

  };



}
