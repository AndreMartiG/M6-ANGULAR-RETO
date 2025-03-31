import { Component, inject, OnInit } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction.interface';
import { TransactionHistoryService } from 'src/app/services/transaction-history.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  private transactionHistoryService = inject(TransactionHistoryService);
  public transactions: Transaction[];

  constructor() {  }
  
  ngOnInit(): void {
    this.transactionHistoryService.getHistory().subscribe(data => this.transactions = data);
  }
}
