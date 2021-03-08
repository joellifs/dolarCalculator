import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  calculadoraForms: FormGroup;
  resultado = 0.0;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.calculadoraForms = this.formBuilder.group({
      caja_ars: ['', Validators.required],
      caja_usd: ['', Validators.required],
      coti_compra: ['', Validators.required],
      coti_venta: ['', Validators.required],
      tipo_accion: ['', Validators.required],
      monto: ['', Validators.required],
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

    if (calculadora.tipo_accion == 'comprar') {
      resultadoCajaUsd = calculadora.caja_usd + calculadora.monto;
      resultadoCajaArs = calculadora.caja_ars - this.resultado;
    } else if (calculadora.tipo_accion == 'vender') {
      resultadoCajaUsd = calculadora.caja_usd - calculadora.monto;
      resultadoCajaArs = calculadora.caja_ars + this.resultado;
    }

    if (resultadoCajaArs < 0 || resultadoCajaUsd < 0) {
      console.log('Sin saldo en Cajas ');
    } else {
      //caja_ars se actualiza con lo que calculamos arriba en caja_ars.
      this.calculadoraForms.patchValue({
        caja_ars: resultadoCajaArs,
        caja_usd: resultadoCajaUsd,
      });
    }
  }

  // 1. sacar los datos del formulario.
  // 2. obtener tipo_accion.
  // 3. dependiendo tipo_accion es la operacion matematica a realizar.
  // 3.a. COMPRA -> resultado = coti_compra * monto.
  // 3.b. VENTA -> resultado = coti_venta * monto.

  calcular() {
    //calculadora es un objeto que esta guardando todo lo que tiene el formulario.
    const calculadora = this.calculadoraForms.value;
    console.log('Desde funcion calcular', calculadora);
    if (calculadora.tipo_accion == 'comprar') {
      this.resultado = calculadora.coti_compra * calculadora.monto;
    } else if (calculadora.tipo_accion == 'vender') {
      this.resultado = calculadora.coti_venta * calculadora.monto;
    }
  }
}
