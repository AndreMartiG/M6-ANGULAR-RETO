import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '../state/state';
@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  constructor(private router: Router, private state: State) {  }

  getBalance() {
    this.router.navigateByUrl('/accountBalance');
  }

  makeDeposit(descripcion: string) {
    this.state.transaccDescrpt = descripcion;
    console.log('Description:', this.state.transaccDescrpt$);

    this.router.navigateByUrl('/deposit');
  }

  makeTransfer(descripcion: string) {
    this.state.transaccDescrpt = descripcion;
    console.log('Description:', this.state.transaccDescrpt$);

    this.router.navigateByUrl('/transfer');
  }

  makePurchase(descripcion: string) {
    this.state.transaccDescrpt = descripcion;
    console.log('Description:', this.state.transaccDescrpt$);

    this.router.navigateByUrl('/purchase');
  }

  makeWithdrawal(descripcion: string) {
    this.state.transaccDescrpt = descripcion;
    console.log('Description:', this.state.transaccDescrpt$);

    this.router.navigateByUrl('/withdrawal');
  }
  
  getHistory() {
    this.router.navigateByUrl('/transactionHistory');
  }
}
