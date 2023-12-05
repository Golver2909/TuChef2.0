import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./modules/auth/auth.module"
import { PrincipalModule } from './modules/principal/principal.module';
import { InicioComponent } from './modules/principal/pages/inicio/inicio.component';


const routes: Routes = [
  //aplicando carga perezosa en las rutas
  {
    path:'',component:InicioComponent
  },
{
  path:'', loadChildren:()=>import('./modules/auth/auth.module').then(m => m.AuthModule)
},
{
  path:'', loadChildren:()=>import('./modules/principal/principal.module').then(m => m.PrincipalModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
