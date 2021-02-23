import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HistoricoComponent } from './historico/historico.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { EvolucionComponent } from './evolucion/evolucion.component';
const routes: Routes = [
  {
    path: '',
    component: CalculadoraComponent,
  },
  {
    path: 'historico',
    component: HistoricoComponent,
  },
  {
    path: 'cotizaciones',
    component: CotizacionesComponent,
  },
  {
    path: 'evolucion',
    component: EvolucionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
