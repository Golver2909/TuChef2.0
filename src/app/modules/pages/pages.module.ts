import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CrearRecetaComponent } from './crear-receta/crear-receta.component';


@NgModule({
  declarations: [
    CrearRecetaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports:[
    CrearRecetaComponent
  ]
})
export class PagesModule { }
 