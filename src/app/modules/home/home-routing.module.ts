import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRecetasComponent } from './pages/p-recetas/p-recetas.component';
const routes: Routes = [
  {path:'posteo',component:PRecetasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
