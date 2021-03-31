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
  constructor(private historicoService: HistoricoService) {}

  ngOnInit(): void {
    // los resultados del servicio los pongo en el vector
    this.vectorResultados = this.historicoService.obtenerResultados();

    for (let index = 0; index < this.vectorResultados.length; index++) {
      const element = this.vectorResultados[index];

      console.log('desde el for');
      console.log(element.monto);
    }
  }
}
//   totales(){
//     this.totalUSD = this.vectorResultados.monto  }

// }
