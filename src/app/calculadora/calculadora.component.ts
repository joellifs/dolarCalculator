import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  calculadoraForms: FormGroup;

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
}
