import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarRecetaComponent } from './mostrar-receta/mostrar-receta.component';

const routes: Routes = [
  {
    path:'mostrar',component:MostrarRecetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

  
 }
