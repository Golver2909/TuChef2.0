import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

import { ConfigUsuarioComponent } from './pages/config-usuario/config-usuario.component';
import { AyudaUsuarioComponent } from './pages/ayuda-usuario/ayuda-usuario.component';
const routes: Routes = [
  {
    path:'inicio',component:InicioComponent
  },
  {
    path:'',component:InicioComponent
  },
  {
    path:'config-usuario',component:ConfigUsuarioComponent
  },
  {
    path:'ayuda-usuario',component:AyudaUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
