import { Injectable } from '@angular/core';
import { Credito } from './models/credito';

@Injectable({
  providedIn: 'root'
})
export class CreditoServiceService {

  constructor() { }
  get(): Credito[] {
    return JSON.parse(localStorage.getItem('datos'));
    }
    post(Credito: Credito) {
    let creditos: Credito[] = [];
    if (this.get() != null) {
    creditos = this.get();
    }
    creditos.push(Credito);
    localStorage.setItem('datos', JSON.stringify(creditos));
    }
    
}
