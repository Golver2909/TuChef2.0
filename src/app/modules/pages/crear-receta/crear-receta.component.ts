import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
 


@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.css'],


})



export class CrearRecetaComponent {
  displayedColumns: string[] = ['position', 'name','symbol'];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: Card[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},
];






