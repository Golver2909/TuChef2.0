import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CardsComponent } from './cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MostrarRecetaComponent } from './mostrar-receta/mostrar-receta.component';

@NgModule({
  declarations: [
    CardsComponent,
    MostrarRecetaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatIconModule
  ],
  exports:[
    CardsComponent,
    MatCardModule,
    MatIconModule
  ]
})
export class PagesModule { }
