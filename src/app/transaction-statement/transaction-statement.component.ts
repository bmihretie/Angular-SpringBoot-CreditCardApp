import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-transaction-statement',
  templateUrl: './transaction-statement.component.html',
  styleUrls: ['./transaction-statement.component.css']
})
export class TransactionStatementComponent implements OnInit {

  constructor(private httpClientService:HttpclientService, private authService: AuthenticationService) { }
  
  statements: any;
  username: any;
  id: any;

  
  ngOnInit() {
    this.username = this.authService.getUsername()
    this.httpClientService.getCustomerAccount(this.username).subscribe(
      response =>{
        console.log(response.id)
        this.id = response.id
        this.httpClientService.getCustomerStatementsAndCreditScore(this.id).subscribe(
          response =>{
            console.log(response)
            this.statements = response
          },
        )
      },
    )
  }

}
