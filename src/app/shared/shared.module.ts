import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    CardsComponent,
   NavbarComponent,
   FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    // MATERIAL
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    NavbarComponent,
    CardsComponent,
    FooterComponent
  ]
})
export class SharedModule { }
