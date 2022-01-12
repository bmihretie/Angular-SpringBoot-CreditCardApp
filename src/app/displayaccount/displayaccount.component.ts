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
  empSection1 = false;

  customers !:Customer[];

  constructor(private httpClientService:HttpclientService) { }

  ngOnInit(){

    this.httpClientService.getCustomers().subscribe(
      response =>{this.customers = response},
    )

  }

  // handleSuccessfulResponse(response): void {
  //   throw new Error('Method not implemented.');
  // }

  toEmpSection(){

    this.pinfoSection = false;
    this.empSection = true;

  }

  toEmpSection1(){

    this.empSection = false;
    this.empSection1 = true;

  }

  onBack(){

    this.pinfoSection = true;
    this.empSection = false;
  }

  onBack1(){

    this.empSection = true;
    this.empSection1 = false;
  }

}
