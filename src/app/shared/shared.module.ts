import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class SharedModule { }
