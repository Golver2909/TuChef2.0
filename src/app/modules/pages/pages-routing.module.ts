import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { MostrarRecetaComponent } from './mostrar-receta/mostrar-receta.component';

const routes: Routes = [
  {
    path:"cards",component:CardsComponent
  },
  {
    path:"mostrarRecetas",component:MostrarRecetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
