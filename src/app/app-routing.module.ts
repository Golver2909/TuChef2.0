import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';


const routes: Routes = [
  //aplicando carga perezosa en las rutas
{
  path:'auth',
  loadChildren:()=>import('./modules/auth/auth.module').then(m => m.AuthModule)
},
{
  path:'',
  loadChildren:()=>import('./shared/shared.module').then(m => m.SharedModule)
},
{
  path:'home',
  loadChildren:()=>import('./modules/home/home.module').then(m => m.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
