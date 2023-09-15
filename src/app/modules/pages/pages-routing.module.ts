import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRecetaComponent } from './crear-receta/crear-receta.component';

const routes: Routes = [
  {
    path: 'crearReceta', component: CrearRecetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
