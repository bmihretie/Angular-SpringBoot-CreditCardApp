import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';

@Component({
  selector: 'app-transaction-statement',
  templateUrl: './transaction-statement.component.html',
  styleUrls: ['./transaction-statement.component.css']
})
export class TransactionStatementComponent implements OnInit {

  constructor(private httpClientService:HttpclientService) { }
  
  statements: any;


  
  ngOnInit() {
    this.httpClientService.getCustomerStatementsAndCreditScore().subscribe(
      response =>{
        console.log(response)
        this.statements = response
      },
    )
  }

}
