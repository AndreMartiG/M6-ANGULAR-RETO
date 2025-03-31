import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class State {
  private _userEmail = new BehaviorSubject<string>(null);
  
  private _userId: number = 0;
  private _transaccDescrpt: string = '';

  get userEmail$(): Observable<string> {
    return this._userEmail.asObservable();
  }

  get userId$(): number {
    return this._userId;
  }

  get transaccDescrpt$(): string {
    return this._transaccDescrpt;
  }

  set userEmail(email: string) {
    this._userEmail.next(email);
  }

  set transaccDescrpt(transaccDescrpt: string) { 
    this._transaccDescrpt = transaccDescrpt;
  }

  set userId(userId: number) {
    this._userId = userId;
  }
}
