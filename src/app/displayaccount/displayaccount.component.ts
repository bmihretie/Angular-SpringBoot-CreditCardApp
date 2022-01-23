import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Customer, HttpclientService } from '../service/httpclient.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-displayaccount',
  templateUrl: './displayaccount.component.html',
  styleUrls: ['./displayaccount.component.css']
})

export class DisplayaccountComponent implements OnInit, AfterViewInit{

  pinfoSection = true;
  empSection = false;
  empSection1 = false;

  account: any;
  username: any;
  id: any;
  transactions: any;

   // fields for pagination table column
  displayedColumns: string[] = ['id', 'amount'];

  // a field that holds the data for transaction history information
  dataSource !: MatTableDataSource<any>;
 

  @ViewChild('paginator')
  paginator!: MatPaginator;

  ngAfterViewInit() {
    // get transaction history information using http client service  
    // and customer id  
    this.httpClientService.getTransactionHistory(this.id).subscribe(
      response =>{
        this.transactions = response
        this.dataSource = new MatTableDataSource(this.transactions);
        this.dataSource.paginator = this.paginator;
      },
    )

    
  }

  constructor(private httpClientService:HttpclientService, private authService: AuthenticationService) { }

  ngOnInit(){
   
    // get username during user authenetication to map
    // the specific data to specific username 
    this.username = this.authService.getUsername()
    // get account  information based on user name using http client 
    this.httpClientService.getCustomerAccount(this.username).subscribe(
      response =>{
        console.log(response)
        this.account = response
        this.id = response.id
        console.log(`Here is the user ID ${this.id}`);
      },
    )
     // for paginator data attachement
    this.dataSource.paginator = this.paginator;

  }


}
