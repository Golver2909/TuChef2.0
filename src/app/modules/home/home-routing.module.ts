import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaRecetasComponent } from './pages/pagina-recetas/pagina-recetas.component';

const routes: Routes = [
  {
    path:'pagina-recetas',component:PaginaRecetasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
