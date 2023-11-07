import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CardsComponent } from './cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardsComponent
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
