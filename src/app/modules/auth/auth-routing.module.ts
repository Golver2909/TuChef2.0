import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './pages/crud/crud.component';

const routes: Routes = [
//Rutas secundarias de auth
  {
    path:'',
    component: CrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
