import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { OptionsComponent } from './options/options.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    OptionsComponent,
    CheckBalanceComponent,
    DepositComponent,
    TransactionHistoryComponent,
    PurchaseComponent,
    WithdrawalComponent,
    TransferComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ComponentsRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
