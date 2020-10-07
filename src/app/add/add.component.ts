import { Component, OnInit } from '@angular/core';
import { CreditoServiceService } from '../credito-service.service';
import { Credito } from '../models/credito';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  credito: Credito;

  constructor(private creditoService: CreditoServiceService) { }
  ngOnInit() { this.credito=new Credito;  }

  add() {
   this.credito.credito =this.credito.capital*((1+this.credito.interes/100)**this.credito.tiempo );
   alert('se agrego'+JSON.stringify(this.credito));
   this.creditoService.post(this.credito);
  }
}