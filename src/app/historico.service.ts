import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  arreglo_resultados: any[] = [];

  // Traer los objetos ( operación ) de calculadora, al tocar boton actualizar caja
  constructor() {}
  cargarResultado(objeto_resultadoFinal: any) {
    this.arreglo_resultados.push(objeto_resultadoFinal);
  }
  // Salen los objetos al componente Historico
  obtenerResultados() {
    return this.arreglo_resultados;
  }
}
