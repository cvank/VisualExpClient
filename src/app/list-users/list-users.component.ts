import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {UserService, User} from '../services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSpinner} from '@angular/material/progress-spinner';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  displayedColumns = ['firstname', 'lastname', 'address'];
  dataSource = new MatTableDataSource<User>();

  resultsLength = 0;
  isLoadingResults = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.loadAllUsers()
      .subscribe(data => {
        this.dataSource.data = data;
        console.log(this.dataSource.data);
      });
  }


}




