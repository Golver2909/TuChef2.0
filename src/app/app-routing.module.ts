import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./modules/auth/auth.module"
import { PrincipalModule } from './modules/principal/principal.module';
import { PagesModule } from './modules/pages/pages.module';


const routes: Routes = [
  //aplicando carga perezosa en las rutas
{
  path:'auth', loadChildren:()=>import('./modules/auth/auth.module').then(m => m.AuthModule)
},
{
  path:'', loadChildren:()=>import('./modules/principal/principal.module').then(m => m.PrincipalModule)
},
{
  path:'pages', loadChildren:()=>import('./modules/pages/pages.module').then(m => m.PagesModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
