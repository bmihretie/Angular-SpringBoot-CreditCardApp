

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthenticationService } from '../service/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  username!: string;
  password!:string;
  constructor(private httpClient:HttpClient, private authService: AuthenticationService) { }

  // creates the customer account based on user input 
  // using http client service
  public createCustomerCredit(customer:any) {
   
    return this.httpClient.post("https://creditcreate1-be-docker.azurewebsites.net/customer/save",customer);
    
  }

  // get specific customer account based on customer username
  public getCustomerAccount(username: any) {
    return this.httpClient.get<Customer>(`https://creditcreate1-be-docker.azurewebsites.net/account/getByUsername?username=${username}`);
  }
  
  // get specific customer credit score and history using 
  // customer account id and http client service 
  public getCustomerStatementsAndCreditScore(id: any) {
    return this.httpClient.get(`https://creditcreate1-be-docker.azurewebsites.net/monthlyStatement/getByAccount?id=${id}`);
  }

  // get specific customer transaction history using 
  // customer account id and http client service 
  public getTransactionHistory(id: any) {
    return this.httpClient.get(`https://creditcreate1-be-docker.azurewebsites.net/activity/getByAccount?id=${id}`)
   }


   
  /*
  public getUserName(username:string){
    return this.httpClient.get<string>('http://localhost:8080/username');
  }

  public getPassword(pass:string){
    return this.httpClient.get<string>('http://localhost:8080/password');
  }

  
  public getCustomers()
  {
    let username='username'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.httpClient.get<Customer[]>('http://localhost:8080/customer',{headers});
    //return this.httpClient.get<Customer[]>('http://localhost:8080/customers');
  }*/


  
  
}

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
