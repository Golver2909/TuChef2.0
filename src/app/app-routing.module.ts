import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { PagesModule } from './modules/pages/pages.module';


const routes: Routes = [
  //aplicando carga perezosa en las rutas
{
  path:'auth',
  loadChildren:()=>import('./modules/auth/auth.module').then(m => m.AuthModule)
},
{
  path:'crear-receta',
  loadChildren:()=>import('./modules/pages/pages.module').then(m => m.PagesModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
