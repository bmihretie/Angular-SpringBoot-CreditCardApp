import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Customer, HttpclientService } from '../service/httpclient.service';

@Component({
  selector: 'app-displayaccount',
  templateUrl: './displayaccount.component.html',
  styleUrls: ['./displayaccount.component.css']
})



export class DisplayaccountComponent implements OnInit, AfterViewInit{
//export class DisplayaccountComponent implements OnInit{
  pinfoSection = true;
  empSection = false;
  empSection1 = false;

  // customers !:Customer[];
  account: any;

  displayedColumns: string[] = ['id', 'amount', 'date'];
  
  dataSource = new MatTableDataSource<TransactionHistory>(ELEMENT_DATA);

  @ViewChild('paginator')
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  


  constructor(private httpClientService:HttpclientService) { }

  ngOnInit(){
    // for paginator data attachement
    this.dataSource.paginator = this.paginator;

    this.httpClientService.getCustomerAccount().subscribe(
      response =>{
        console.log(response)
        this.account = response
      },
    )
  }

  

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

export interface TransactionHistory {
  id: string;
  amount: number;
  date: string;
  
}

const ELEMENT_DATA: TransactionHistory[] = [
  {id: 'ID1000', amount: 270.60, date: '02/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '03/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '04/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '05/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '05/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '05/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '05/21/2021'},
  {id: 'ID1000', amount: 270.60, date: '05/21/2021'},
  {id: 'ID1000', amount: 270.60, date: '05/21/2021'},
  {id: 'ID1000', amount: 270.60, date: '05/21/2021'},
  {id: 'ID1000', amount: 270.60, date: '06/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '07/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '08/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '09/23/2021'},
  {id: 'ID1000', amount: 270.60, date: '09/23/2021'},
  {id: 'ID1000', amount: 270.60, date: '09/23/2021'},
  {id: 'ID1000', amount: 270.60, date: '09/23/2021'},
  {id: 'ID1000', amount: 270.60, date: '10/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '11/20/2021'},
  {id: 'ID1000', amount: 270.60, date: '12/20/2021'},
 
  {id: 'ID1000', amount: 270.60, date: '12/21/2021'},
  {id: 'ID1000', amount: 270.60, date: '12/22/2021'},
  {id: 'ID1000', amount: 270.60, date: '12/22/2021'},
  {id: 'ID1000', amount: 270.60, date: '12/22/2021'},
  {id: 'ID1000', amount: 270.60, date: '12/23/2021'},
  {id: 'ID1000', amount: 270.60, date: '12/24/2021'},
  {id: 'ID1000', amount: 270.60, date: '12/24/2021'},
  {id: 'ID1000', amount: 270.60, date: '12/24/2021'},

  


  {id: 'ID1000', amount: 270.60, date: '01/01/2022'},
  {id: 'ID1000', amount: 270.60, date: '01/02/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/02/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/02/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/03/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/04/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/05/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/05/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/05/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/05/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/06/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/07/2021'},

  {id: 'ID1000', amount: 270.60, date: '01/08/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/09/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/10/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/11/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/11/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/11/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/11/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/12/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/13/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/13/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/13/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/13/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/13/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/13/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/14/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/14/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/14/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/14/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/14/2021'},
  {id: 'ID1000', amount: 270.60, date: '01/14/2021'},
  
];