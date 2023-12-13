import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MostrarRecetaComponent } from './mostrar-receta/mostrar-receta.component';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {FormsModule,  ReactiveFormsModule,} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { DatosRecetaComponent } from './datos-receta/datos-receta.component';

@NgModule({
  declarations: [
    MostrarRecetaComponent,
    DatosRecetaComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    PagesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  exports:[

    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatTableModule,
    MostrarRecetaComponent,
    DatosRecetaComponent
  ]

})
export class PagesModule { }
