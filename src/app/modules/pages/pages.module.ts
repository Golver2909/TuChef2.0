import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearRecetaComponent } from './crear-receta/crear-receta.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CrearRecetaComponent
  ]
})
export class PagesModule { }
