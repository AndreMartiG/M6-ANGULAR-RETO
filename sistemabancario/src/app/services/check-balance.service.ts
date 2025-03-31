import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../components/state/state';
import { Balance } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckBalanceService {
  
  constructor(private httpClient: HttpClient, private state: State) { }

  getBalance(): Observable<Balance> {
    const userId = this.state.userId$;
    return this.httpClient.get<Balance>('http://localhost:8080/cuenta/consultaSaldo/'.concat(userId.toString()));
  }
}
