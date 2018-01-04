import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {


  constructor(private httpClient: HttpClient) {

  }

  loadAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8384/users/all');
  }

}


export interface User {
  id: String;
  firstName: String;
  lastName: String;
  address: String;
}
