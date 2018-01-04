import {TransactionService, Transaction} from '../services/transaction.service';
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit, AfterViewInit {


  displayedColumns = ['id', 'date', 'userId', 'amount', 'type', 'sourceId'];
  dataSource = new MatTableDataSource<Transaction>();

  resultsLength = 0;
  isLoadingResults = false;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private transactionService: TransactionService) {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.transactionService.loadAllTransactions()
      .subscribe(data => {
        this.dataSource.data = data;
        this.resultsLength = data.length;
        console.log(this.dataSource.data);
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
