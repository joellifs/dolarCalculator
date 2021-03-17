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
  displayedColumns = ['hora', 'operacion', 'caja_usd', 'caja_ars'];
  constructor(private historicoService: HistoricoService) {}

  ngOnInit(): void {
    // los resultados del servicio los pongo en el vector
    this.vectorResultados = this.historicoService.obtenerResultados();
  }
}
