import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { AuthenticationService } from '../service/authentication.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
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

  
  // fields for pagination table column
  displayedColumns: string[] = ['statementDate','download'];
  // a field that holds the data for credit history information
  dataSource !: MatTableDataSource<any>;

  @ViewChild('paginator')
  paginator!: MatPaginator;

  @ViewChild(MatSort) matSort!: MatSort;

  

  
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
            //this.statements.sort = this.matSort;
            this.dataSource = new MatTableDataSource(this.statements);
            this.dataSource.sort = this.matSort;
            this.dataSource.paginator = this.paginator;
          },
        )
      },
    )
  }

}
