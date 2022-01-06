

import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

export class Customer {
  constructor(
    public accountNumber: String ,
    public balance:number,
    public remianingCredit:number,
    public firstName:String ,
    public middleName: String,
		public lastName: String,
    public birthDate: String,
    public socialSecurity:String,
    public adress: String ,
    public companyName:String ,
    public companyPhoneNumb:String ,
    public salary:String ,
    public emptField:String ,
    public lengthOfEmployment:String ,
    public referenceOneName:String ,
    public referenceOnePhoneNumb: String ,
    public referenceTwoName: String ,
		public referenceTwoPhoneNumb:String 


  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  username!: string;
  pass!:string;
  constructor(private httpClient:HttpClient) { }

  public  getCustomers()
  {
    console.log("test call");
    return this.httpClient.get<Customer[]>('http://localhost:8080/customers');
  }

  public createCustomerCredit(customer:Customer) {
    return this.httpClient.post<Customer>("http://localhost:8080/customers", customer);
  }
  public getUserName(username:string){
    return this.httpClient.get<string>('http://localhost:8080/username');
  }

  public getPassword(pass:string){
    return this.httpClient.get<string>('http://localhost:8080/password');
  }
}
