import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./modules/auth/auth.module"


const routes: Routes = [
  //aplicando carga perezosa en las rutas
{
  path:'auth', loadChildren:()=>import('./modules/auth/auth.module').then(m => m.AuthModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
