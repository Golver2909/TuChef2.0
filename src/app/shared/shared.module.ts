import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class SharedModule { }
