import { Component, OnInit } from '@angular/core';
import { Customer, HttpclientService } from '../service/httpclient.service';


@Component({
  selector: 'app-displayaccount',
  templateUrl: './displayaccount.component.html',
  styleUrls: ['./displayaccount.component.css']
})
export class DisplayaccountComponent implements OnInit {

  pinfoSection = true;
  empSection = false;

  // customer !:Customer;
  account: any;

  constructor(private httpClientService:HttpclientService) { }

  ngOnInit(){

    // this.httpClientService.getCustomers().subscribe(
    //   response =>{
    //     this.customer = response
    //   },
      
    // )

    this.httpClientService.getCustomerAccount().subscribe(
      response =>{
        console.log(response)
        this.account = response
      },
    )
  }


  // handleSuccessfulResponse(response): void {
  //   throw new Error('Method not implemented.');
  // }

  toEmpSection(){

    this.pinfoSection = false;
    this.empSection = true;

  }

  onBack(){

    this.pinfoSection = true;
    this.empSection = false;
  }

}
