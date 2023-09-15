import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  //aplicando carga perezosa en las rutas
  //{path:'', loadChildren:()=> import('./').then(m=>m.)},
  {
    path: '', // Esto establece el path (ruta) que se debe coincidir en la URL para activar esta redirección
    redirectTo: '/home', //esto especifica la ruta a la que se diriga 
    pathMatch:'full' //Esto indica que la coincidencia debe ser completa para que se active la redirección
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
