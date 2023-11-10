import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';

import { PrincipalRoutingModule } from './principal-routing.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ],
  exports:[
    InicioComponent
  ]
})
export class PrincipalModule { }
