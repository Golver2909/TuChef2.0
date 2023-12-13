import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { MostrarRecetaComponent } from './mostrar-receta/mostrar-receta.component';
import { DatosRecetaComponent } from './datos-receta/datos-receta.component';

const routes: Routes = [
  {
    path:'cards',component:CardsComponent
  },
  {
    path:"mostrar",component:MostrarRecetaComponent
  },
  {
    path:'receta',component:DatosRecetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
