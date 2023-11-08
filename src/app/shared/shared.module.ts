import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

// MATERIAL
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

// COMPONENTES



@NgModule({
  declarations: [
   NavbarComponent
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
    NavbarComponent
  ]
})
export class SharedModule { }
