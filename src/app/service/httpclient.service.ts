

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'

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
  password!:string;
  constructor(private httpClient:HttpClient) { }

  public  getCustomers()
  {
    let username='username'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.httpClient.get<Customer[]>('http://localhost:8080/customer',{headers});
    //return this.httpClient.get<Customer[]>('http://localhost:8080/customers');
  }

  public createCustomerCredit(customer:any) {
    let username='username'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Customer>("https://creditgroup1-spring-docker.azurewebsites.net/customer", customer,{headers});
    //return this.httpClient.post<Customer>("http://localhost:8080/customers", customer);
  }

  public getCustomerAccount() {
    return this.httpClient.get<Customer>('https://creditgroup1-spring-docker.azurewebsites.net/account/get?id=123456');
  }
  
  public getCustomerStatementsAndCreditScore() {
    return this.httpClient.get('https://creditgroup1-spring-docker.azurewebsites.net/statement/getByAccount?id=123456');
  }

  public getUserName(username:string){
    return this.httpClient.get<string>('http://localhost:8080/username');
  }

  public getPassword(pass:string){
    return this.httpClient.get<string>('http://localhost:8080/password');
  }
}
