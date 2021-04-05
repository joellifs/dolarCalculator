import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  arreglo_resultados: any[] = [];
  arreglo_dolarBlue: any[] = [];

  // Traer los objetos ( operación ) de calculadora, al tocar boton actualizar caja
  constructor() {}

  cargarResultado(objeto_resultadoFinal: any) {
    this.arreglo_resultados.push(objeto_resultadoFinal);
  }
  // Salen los objetos al componente Historico
  obtenerResultados() {
    return this.arreglo_resultados;
  }

  // EMPIEZO A CONSUMIR API DOLAR

  //   obtenerCotizacionBlue() {
  //     return this.http.get('https://api-dolar-argentina.herokuapp.com/dolarblue');
  //   }
  //   retornoBlue() {
  //     return this.arreglo_dolarBlue;
  //   }
}
