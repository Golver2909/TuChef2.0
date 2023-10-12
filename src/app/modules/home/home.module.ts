import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PRecetasComponent } from './pages/p-recetas/p-recetas.component';

@NgModule({
  declarations: [
    PRecetasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
