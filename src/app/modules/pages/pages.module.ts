import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CardsComponent } from './cards/cards.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule
  ],
  exports:[
    CardsComponent,
    MatCardModule
  ]
})
export class PagesModule { }
