import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  arreglo_resultados: any[] = [];
  arreglo_dolarBlue: any[] = [];
  estado_cajaUSD = 0;
  estado_cajaARS = 0;

  // Traer los objetos ( operación ) de calculadora, al tocar boton actualizar caja
  constructor() {}

  cargarResultado(objeto_resultadoFinal: any) {
    this.arreglo_resultados.push(objeto_resultadoFinal);
    this.estado_cajaUSD = objeto_resultadoFinal.caja_usd;
    this.estado_cajaARS = objeto_resultadoFinal.caja_ars;
  }
  // Sale el arreglo del servicio
  obtenerResultados() {
    return this.arreglo_resultados;
  }
  obtenerCajaUSD() {
    return this.estado_cajaUSD;
  }
  obtenerCajaARS() {
    return this.estado_cajaARS;
  }
  // EMPIEZO A CONSUMIR API DOLAR

  //   obtenerCotizacionBlue() {
  //     return this.http.get('https://api-dolar-argentina.herokuapp.com/dolarblue');
  //   }
  //   retornoBlue() {
  //     return this.arreglo_dolarBlue;
  //   }
}
