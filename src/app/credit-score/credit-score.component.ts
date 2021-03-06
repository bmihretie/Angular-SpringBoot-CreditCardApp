import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpclientService } from '../service/httpclient.service';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-credit-score',
  templateUrl: './credit-score.component.html',
  styleUrls: ['./credit-score.component.css']
})
export class CreditScoreComponent implements OnInit,AfterViewInit {

  constructor(private httpClientService:HttpclientService, private authService: AuthenticationService) { }

  creditScores: any;
  username: any;
  id: any;


  // fields for toggling hide and show button for credit card history
  isCreditHistoryShown:boolean = false;
  buttonName:string='Show Credit Score History';


  // fields for pagination table column
  displayedColumns: string[] = ['creditScore', 'statementDate','description'];
  
 // a field that holds the data for credit history information
  dataSource !: MatTableDataSource<any>;

  @ViewChild('paginator')
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.username = this.authService.getUsername()
    this.httpClientService.getCustomerAccount(this.username).subscribe(
      response =>{
        console.log(response.id)
        this.id = response.id
      },
    )
    this.httpClientService.getCustomerStatementsAndCreditScore(this.id).subscribe(
      (response:any) =>{ 
        console.log(response)
        this.creditScores = response;
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
      },
    )
  
  }

  


  toggleCreditHistoryShow() {

  this.isCreditHistoryShown = ! this.isCreditHistoryShown;
  if(this.isCreditHistoryShown==true){
    this.buttonName ='Hide Credit Score History';
    
    
  }
  else{
    this.buttonName='Show Credit Score History';
  }
  

  }

  

}
