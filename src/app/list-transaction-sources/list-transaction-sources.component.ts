import {TransactionSourceService, TransactionSource} from '../services/transaction-source.service';
import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-transaction-sources',
  templateUrl: './list-transaction-sources.component.html',
  styleUrls: ['./list-transaction-sources.component.css']
})
export class ListTransactionSourcesComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'name', 'reference'];
  dataSource = new MatTableDataSource<TransactionSource>();

  resultsLength = 0;
  isLoadingResults = false;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private transactionService: TransactionSourceService) {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.transactionService.loadAllTransactionSources()
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
