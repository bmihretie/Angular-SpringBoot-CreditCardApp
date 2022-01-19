

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthenticationService } from '../service/authentication.service';

// export class Customer {
//   constructor(
//     public accountNumber: String ,
//     public balance:number,
//     public remianingCredit:number,
//     public firstName:String ,
//     public middleName: String,
// 		public lastName: String,
//     public birthDate: String,
//     public socialSecurity:String,
//     public adress: String ,
//     public companyName:String ,
//     public companyPhoneNumb:String ,
//     public salary:String ,
//     public emptField:String ,
//     public lengthOfEmployment:String ,
//     public referenceOneName:String ,
//     public referenceOnePhoneNumb: String ,
//     public referenceTwoName: String ,
// 		public referenceTwoPhoneNumb:String 
//   ){}
// }

export class Customer{
  constructor(
    public id:any,
    public ssn:number,
    public firstName:String ,
    public middleName: String,
		public lastName: String,
    public birthdate:string,
    public adress:String,
    public phoneNumber:number,
    public employer:string,
    public lengthOfEmp:number,
    public fieldOfEmp: string,
    public annualSalary: number,
    public userName: string,
    public pass:string

  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  username!: string;
  password!:string;
  constructor(private httpClient:HttpClient, private authService: AuthenticationService) { }

  public getCustomers()
  {
    let username='username'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.httpClient.get<Customer[]>('http://localhost:8080/customer',{headers});
    //return this.httpClient.get<Customer[]>('http://localhost:8080/customers');
  }

  // public createCustomerCredit(customer:any) {
  //   let username='username'
  //   let password='password'
  
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   //return this.httpClient.post<Customer>("https://creditcreate1-be-docker.azurewebsites.net", customer,{headers});
  //   return this.httpClient.post<Customer>("https://creditcreate1-be-docker.azurewebsites.net/customer/save",customer,{headers});
  //   //return this.httpClient.post<Customer>("http://localhost:8080/customers", customer);
  // }

  public createCustomerCredit(data:any) {
   
  
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //return this.httpClient.post<Customer>("https://creditcreate1-be-docker.azurewebsites.net/customer", customer,{headers});
    return this.httpClient.post("https://creditcreate1-be-docker.azurewebsites.net/customer/save",data);
    //return this.httpClient.post<Customer>("http://localhost:8080/customers", customer);
  }

  public getCustomerAccount(username: any) {
    return this.httpClient.get<Customer>(`https://creditcreate1-be-docker.azurewebsites.net/account/getByUsername?username=${username}`);
  }
  
  public getCustomerStatementsAndCreditScore(id: any) {
    return this.httpClient.get(`https://creditcreate1-be-docker.azurewebsites.net/monthlyStatement/getByAccount?id=${id}`);
  }

  public getTransactionHistory(accountId: any) {
    return this.httpClient.get(`https://creditcreate1-be-docker.azurewebsites.net/activity/getByAccount?id=${accountId}`)
   }

  public getUserName(username:string){
    return this.httpClient.get<string>('http://localhost:8080/username');
  }

  public getPassword(pass:string){
    return this.httpClient.get<string>('http://localhost:8080/password');
  }
}
