import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';

import { PrincipalRoutingModule } from './principal-routing.module';
import { ConfigUsuarioComponent } from './pages/config-usuario/config-usuario.component';

//ANGULAR
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    InicioComponent,
    ConfigUsuarioComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports:[
    InicioComponent,
    MatButtonModule,
    MatMenuModule
  ]
})
export class PrincipalModule { }
