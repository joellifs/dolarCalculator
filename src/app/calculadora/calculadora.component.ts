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

actualizarCaja(){


}

// 1. sacar los datos del formulario.
// 2. obtener tipo_accion.
// 3. dependiendo tipo_accion es la operacion matematica a realizar.
// 3.a. COMPRA -> resultado = coti_compra * monto.
// 3.b. VENTA -> resultado = coti_venta * monto.

calcular(){
const calculadora= this.calculadoraForms.value;

if (calculadora.tipo_accion == "comprar"){
this.resultado = calculadora.coti_compra * calculadora.monto 

} else if (calculadora.tipo_accion == "vender") {
  this.resultado = calculadora.coti_venta * calculadora.monto;
}

}

}
