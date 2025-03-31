import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../auth.guard';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'accountBalance',
    component: CheckBalanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'deposit',
    component: DepositComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transfer',
    component: TransferComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'withdrawal',
    component: WithdrawalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transactionHistory',
    component: TransactionHistoryComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
