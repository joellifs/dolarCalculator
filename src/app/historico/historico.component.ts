import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
dataSource= [];
displayedColumns=["hora", "operacion", "usd", "ars"];
  constructor() { }

  ngOnInit(): void {
  }


}
