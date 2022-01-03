import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pinfoSection = true;
  empSection = false;

  userInfo!: {
  fname: string,
  mname: string | null,
  lname: string,
  dob: string,
  ssn: number,
  address:string,
  cname:string,
  phoneno: string,
  salary: number,
  emplen:number,
};

  contacts!: {c1Name:string, c1Phone: string, c2Name:string, c2Phone:string};
  secondary!: string|null;

  constructor() { }

  ngOnInit(): void {
  }

  toEmpSection(){
    this.pinfoSection = false;
    this.empSection = true;
  }
  onBack(){
    this.pinfoSection= true;
    this.empSection = false;
  }

}
