import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';

import { PrincipalRoutingModule } from './principal-routing.module';
import { ConfigUsuarioComponent } from './pages/config-usuario/config-usuario.component';

//ANGULAR
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    InicioComponent,
    ConfigUsuarioComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatGridListModule
  ],
  exports:[
    InicioComponent,
    MatGridListModule
  ]
})
export class PrincipalModule { }
