import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports:[
    NavbarComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
