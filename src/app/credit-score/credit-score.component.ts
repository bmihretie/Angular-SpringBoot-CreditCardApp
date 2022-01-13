import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
@Component({
  selector: 'app-credit-score',
  templateUrl: './credit-score.component.html',
  styleUrls: ['./credit-score.component.css']
})
export class CreditScoreComponent implements OnInit {

  constructor(private httpClientService:HttpclientService) { }

  creditScores: any;

  ngOnInit() {
    this.httpClientService.getCustomerStatementsAndCreditScore().subscribe(
      response =>{
        console.log(response)
        this.creditScores = response
      },
    )
  }

}
