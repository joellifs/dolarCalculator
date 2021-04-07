import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {
  vectorResultados: any[] = [];
  displayedColumns = ['hora', 'operacion', 'monto', 'cotizacion'];
  totalUSD = 0;
  totalARS = 0;
  cierreUSD = 0;
  cierreARS = 0;
  inicioUSD = 0;
  inicioARS = 0;
  constructor(private historicoService: HistoricoService) {}

  ngOnInit(): void {
    // los resultados del servicio los pongo en el vector
    this.vectorResultados = this.historicoService.obtenerResultados();
    console.log(this.vectorResultados);

    for (let index = 0; index < this.vectorResultados.length; index++) {
      const element = this.vectorResultados[index];

      if (element.operacion == 'compra') {
        this.totalUSD = this.totalUSD + element.monto;
        this.totalARS = this.totalARS - element.monto * element.cotizacion;
      } else if (element.operacion == 'venta') {
        this.totalUSD = this.totalUSD - element.monto;
        this.totalARS = this.totalARS + element.monto * element.cotizacion;
      }
    }
    this.cierreUSD = this.vectorResultados[
      this.vectorResultados.length - 1
    ].caja_usd;
    this.cierreARS = this.vectorResultados[
      this.vectorResultados.length - 1
    ].caja_ars;

    this.inicioUSD = this.cierreUSD - this.totalUSD;
    this.inicioARS = this.cierreARS - this.totalARS;
  }
}
