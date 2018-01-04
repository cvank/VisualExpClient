import {UserGroupService, Group} from '../services/user-group.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.css']
})
export class ListGroupsComponent implements OnInit {

  displayedColumns = ['name', 'members'];
  dataSource = new MatTableDataSource<Group>();

  resultsLength = 0;
  isLoadingResults = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserGroupService) {

  }

  ngOnInit() {
    this.userService.loadAllGroups()
      .subscribe(data => {
        this.dataSource.data = data;
        console.log(this.dataSource.data);
      });
  }


}
