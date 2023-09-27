import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
 


@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.css'],


})



export class CrearRecetaComponent {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: Card[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
  {position: 9, name: 'Fluorine'},
  {position: 10, name: 'Neon'},
];






