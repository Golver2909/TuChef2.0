import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';

import { PrincipalRoutingModule } from './principal-routing.module';
import { ConfigUsuarioComponent } from './pages/config-usuario/config-usuario.component';

//ANGULAR
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AyudaUsuarioComponent } from './pages/ayuda-usuario/ayuda-usuario.component';



@NgModule({
  declarations: [
    InicioComponent,
    ConfigUsuarioComponent,
    AyudaUsuarioComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
    InicioComponent,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class PrincipalModule { }
