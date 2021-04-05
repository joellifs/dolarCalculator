import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../historico.service';
@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css'],
})
export class CotizacionesComponent implements OnInit {
  vectorCoti: any[] = [];

  fechaBlue = '';
  compraBlue = '';
  ventaBlue = '';
  constructor(private historicoService: HistoricoService) {}

  ngOnInit(): void {
    // this.vectorCoti = this.historicoService.retornoBlue();

    for (let index = 0; index < this.vectorCoti.length; index++) {
      const element = this.vectorCoti[index];

      this.fechaBlue = element.fecha;
      this.compraBlue = element.compra;
      this.ventaBlue = element.venta;
    }
  }
}
