import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SendTransactionService } from 'src/app/services/send-transaction.service';
import { State } from '../state/state';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  private formbuilder = inject(FormBuilder);
  private sendTransactionService = inject(SendTransactionService);

  public isOk: boolean = false;
  public mensaje: string;
  public nuevoSaldo: number;

  constructor(private state: State) { }
  
  TransacForm = this.formbuilder.group({
    idCuenta: ['', Validators.required],
    monto: ['', Validators.required],
  });
  
  send() {
    if (this.TransacForm.invalid) { 
      console.log('Invalid form');
      return; 
    }

    const transactionData = {
      idCuenta: this.state.userId$, // Id de la cuenta del Cliente
      idCuentaDestino: Number(this.TransacForm.value.idCuenta), // Id de la cuenta destino
      monto: Number(this.TransacForm.value.monto),
      descripcion: this.state.transaccDescrpt$,
    };

    console.log('transactionData', transactionData);

    this.sendTransactionService.sendTransfer(transactionData).subscribe(
      (response) => {
        console.log('Transacción exitosa:', response);
        this.isOk = true;
        this.mensaje = response.message; 
        this.nuevoSaldo = response.nuevoSaldo;
      },
      (error) => {
        console.error('Error al enviar la transacción:', error);
        this.isOk = false;
      }
    );
  }
}
