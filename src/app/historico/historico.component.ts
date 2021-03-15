import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})

export class HistoricoComponent implements OnInit {
element: any = {
  hora: "12:00",
  operacion: "venta",
  usd: "1",
  ars: "1",
} ;

elemen2:any = {
  hora: "13:00",
  operacion: "venta",
  usd: "2",
  ars: "2",
};
  dataSource= [this.element, this.elemen2    ];
displayedColumns=["hora", "operacion", "usd", "ars"];
  constructor() { }

  ngOnInit(): void {
  }


}
