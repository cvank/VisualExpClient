import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class TransactionService {

  constructor(private httpClient: HttpClient) {}

  loadAllTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>('http://localhost:8384/transaction/all');
  }

}

export interface Transaction {

  transactionId: String;
  date: Date;
  userId: String;
  amount: number;
  type: String;
  sourceId: String;
}
