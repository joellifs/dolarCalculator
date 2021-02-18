import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraComponent,
  },
  {
    path: 'historico',
    component: HistoricoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
