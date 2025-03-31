import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionCreate, TransactionTransfer } from '../interfaces/transaction.interface';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendTransactionService {

  constructor(private httpClient: HttpClient) { }

  sendDeposit(transactionData: TransactionCreate): Observable<any> {
    switch (transactionData.descripcion) {
      case 'Deposito desde sucursal': 
        return this.httpClient.post('http://localhost:8080/cuenta/depositoSucursal', transactionData);
      case 'Deposito desde cajero automatico':
        return this.httpClient.post('http://localhost:8080/cuenta/depositoCajeroAuto', transactionData);
      default:
        return throwError(() => new Error('Invalid transaction type'));
    }
  }

  sendTransfer(transactionData: TransactionTransfer): Observable<any> {
    return this.httpClient.post('http://localhost:8080/cuenta/depositoOtraCuenta', transactionData);
  }

  sendPurchase(transactionData: TransactionCreate): Observable<any> {
    switch (transactionData.descripcion) {
      case 'Compra en establecimiento fisico': 
        return this.httpClient.post('http://localhost:8080/cuenta/compraEstablecimiento', transactionData);
      case 'Compra en pagina web':
        return this.httpClient.post('http://localhost:8080/cuenta/compraWeb', transactionData);
      default:
        return throwError(() => new Error('Invalid transaction type'));
    }
  }

  sendWithdrawal(transactionData: TransactionCreate): Observable<any> {
      return this.httpClient.post('http://localhost:8080/cuenta/retiroCajero', transactionData);
  }
}
