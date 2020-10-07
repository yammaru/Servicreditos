import { Component, OnInit } from '@angular/core';
import { CreditoServiceService } from '../credito-service.service';
import { Credito } from '../models/credito';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  creditos: Credito[];
  searchText: string;
  constructor(private creditoService: CreditoServiceService) { }

  ngOnInit() {
    this.get();
  }
  get(){this.creditos=this.creditoService.get();}

}
