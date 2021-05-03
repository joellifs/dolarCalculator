import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



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
  constructor(
    private firestore: AngularFirestore,
  ) {
    //cuando haya un cambio en la coleccion "operaciones", guardo los datos en arreglo_resultado.
    //data = es el conjunto de documentos que estan guardados dentro de la coleccion "operaciones".
    // los resultados los ordenamos por hora.
    this.firestore.collection("operaciones",  ref => ref.orderBy('hora')).valueChanges().subscribe( (data ) => {
      
      this.arreglo_resultados = data;
    })
  }

  cargarResultado(objeto_resultadoFinal: any) {
    objeto_resultadoFinal.hora = new Date();
    
    //agrega en la base de datos el objeto resultado final
    this.firestore.collection("operaciones").add(objeto_resultadoFinal);
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

  filtrarFecha(fecha:Date){
    this.firestore.collection("operaciones",  ref => ref.where('hora', '>=' , fecha)).valueChanges().subscribe( (data ) => {
      
     console.log(data);
    })
  }
}
