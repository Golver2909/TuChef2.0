import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaRecetasComponent } from './pages/pagina-recetas/pagina-recetas.component';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [PaginaRecetasComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    PaginaRecetasComponent
  ]
})
export class HomeModule { }
