import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class TransactionSourceService {

  constructor(private httpClient: HttpClient) {

  }

  loadAllTransactionSources(): Observable<TransactionSource[]> {
    return this.httpClient.get<TransactionSource[]>('http://localhost:8384/transaction-source/all');
  }

}

export interface TransactionSource {

  id: String;

  name: String;

  reference: String;
}
