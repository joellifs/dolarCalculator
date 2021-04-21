import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HistoricoService } from '../historico.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  calculadoraForms: FormGroup;
  resultado = 0.0;
  cotizacion = 0;
  isToogled= false;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private historicoService: HistoricoService,
    
  ) {}

  ngOnInit(): void {
    this.calculadoraForms = this.formBuilder.group({
      caja_ars: ['', Validators.required],
      caja_usd: ['', Validators.required],
      coti_compra: ['', Validators.required],
      coti_venta: ['', Validators.required],
      tipo_accion: ['', Validators.required],
      monto: ['', Validators.required],
    });

    this.calculadoraForms.patchValue({
      caja_ars: this.historicoService.obtenerCajaARS(),
      caja_usd: this.historicoService.obtenerCajaUSD(),
    });
  }

  // 1. saber el monto de caja_ars caja_usd y monto caja.
  // 2. compra o venta.
  // 3. compra: caja_usd = caja_usd + monto; caja_ars = caja_ars - resultado.
  // 4. venta: caja_usd = caja_usd - monto; caja_ars = caja_ars + resultado.
  // 5. actualizar input caja.
  // 6. resetear operacion.

  actualizarCaja() {
    const calculadora = this.calculadoraForms.value;
    let resultadoCajaUsd = 0;
    let resultadoCajaArs = 0;

    if (calculadora.tipo_accion == 'compra') {
      resultadoCajaUsd = calculadora.caja_usd + calculadora.monto;
      resultadoCajaArs = calculadora.caja_ars - this.resultado;
    } else if (calculadora.tipo_accion == 'venta') {
      resultadoCajaUsd = calculadora.caja_usd - calculadora.monto;
      resultadoCajaArs = calculadora.caja_ars + this.resultado;
    }

    if (resultadoCajaArs < 0 || resultadoCajaUsd < 0) {
      this.mostrarMensaje('SIN SALDO EN CAJAS', 'alineaMensaje', 2000);
    } else {
      //caja_ars se actualiza con lo que calculamos arriba en caja_ars.
      this.mostrarMensaje('CAJA ACTUALIZADA', 'alineaMensaje2', 4000);

      this.calculadoraForms.patchValue({
        caja_ars: resultadoCajaArs,
        caja_usd: resultadoCajaUsd,
        tipo_accion: '',
        monto: '',
      });

      // Cree un objeto con los atributos de la operación
      const objeto_resultadoFinal = {
        caja_ars: resultadoCajaArs,
        caja_usd: resultadoCajaUsd,
        monto: calculadora.monto,
        hora: Date.now(),
        operacion: calculadora.tipo_accion,
        cotizacion: this.cotizacion,
      };
      // Mandamos el objeto al serivicio
      this.historicoService.cargarResultado(objeto_resultadoFinal);
    }
  }

  // fin funcion actualizar caja

  // 1. sacar los datos del formulario.
  // 2. obtener tipo_accion.
  // 3. dependiendo tipo_accion es la operacion matematica a realizar.
  // 3.a. COMPRA -> resultado = coti_compra * monto.
  // 3.b. VENTA -> resultado = coti_venta * monto.

  calcular() {
    //calculadora es un objeto que esta guardando todo lo que tiene el formulario.
    const calculadora = this.calculadoraForms.value;

    console.log('Desde funcion calcular', calculadora);
    if (calculadora.tipo_accion == 'compra') {
      this.resultado = calculadora.coti_compra * calculadora.monto;
      this.cotizacion = calculadora.coti_compra;
    } else if (calculadora.tipo_accion == 'venta') {
      this.resultado = calculadora.coti_venta * calculadora.monto;
      this.cotizacion = calculadora.coti_venta;
    }
  } // fin funcion calcular

  mostrarMensaje(message: string, nombreStylo: string, duracion: number) {
    this._snackBar.open(message, '', {
      duration: duracion,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [nombreStylo],
    });
  } // fin de mostrar mensaje.
  
  onToogleChange() {
    this.isToogled= !this.isToogled;

  }

}
