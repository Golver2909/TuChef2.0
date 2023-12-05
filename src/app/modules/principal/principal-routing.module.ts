import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ConfigUsuarioComponent } from './pages/config-usuario/config-usuario.component';

const routes: Routes = [
  //rutas secundarias
  {
    path:'inicio',component:InicioComponent
  },
  {
    path:'',component:InicioComponent
  }
  {
    path:'config-usuario',component:ConfigUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
