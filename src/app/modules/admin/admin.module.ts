import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MostrarRecetaComponent } from './mostrar-receta/mostrar-receta.component';


@NgModule({
  declarations: [],
  exports:[],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
  ]
})
export class AdminModule { }
