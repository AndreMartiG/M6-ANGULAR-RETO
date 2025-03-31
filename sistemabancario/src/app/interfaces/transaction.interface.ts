export interface Balance {
    message: string;
    saldo: number;
}

export interface Transaction {
    id: number;
    cuenta: any;
    tipoTransacc: string;
    monto: number;
    descripcion: string;
    fecha: string;
}

export interface TransactionCreate {
    idCuenta: number;
    monto: number;
    descripcion: string;
}

export interface TransactionTransfer {
    idCuenta: number;
    idCuentaDestino: number;
    monto: number;
    descripcion: string;
}