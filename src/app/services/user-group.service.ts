import { User } from './user.service';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class UserGroupService {

  constructor(private httpClient: HttpClient) {}

  loadAllGroups(): Observable<Group[]> {

    return this.httpClient.get<Group[]>('http://localhost:8384/groups/all');
  }

}

export interface Group {

  name: String;
  members: Array<User>;
}
