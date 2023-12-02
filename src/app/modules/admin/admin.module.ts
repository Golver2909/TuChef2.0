import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  exports:[TableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
    
  ]
})
export class AdminModule { }
