import { Component, inject, OnInit } from '@angular/core';
import { Balance } from 'src/app/interfaces/transaction.interface';
import { CheckBalanceService } from 'src/app/services/check-balance.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {
  private checkBalanceService = inject(CheckBalanceService);
  public accountBalance: Balance = { message: '', saldo: 0 };

  constructor() {  }
  ngOnInit(): void {
    this.checkBalanceService.getBalance().subscribe(
      (response) => {
        console.log('Consulta exitosa:', response);
        this.accountBalance = response
      },
      (error) => {
        console.error('Error al enviar la transacción:', error);
      })
  }
}
