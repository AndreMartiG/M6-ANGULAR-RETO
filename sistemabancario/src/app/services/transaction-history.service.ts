import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transaction.interface';
import { State } from '../components/state/state';

@Injectable({
  providedIn: 'root'
})
export class TransactionHistoryService {

  constructor(private httpClient: HttpClient, private state: State) { }
  
  getHistory(): Observable<Transaction[]> {
    const userId = this.state.userId$;
    return this.httpClient.get<Transaction[]>('http://localhost:8080/transaccion/ultimasTransacciones/'.concat(userId.toString()));
  }
}
