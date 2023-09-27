import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
 


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],


})



export class CrudComponent {
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: Card[] = [
  {position: 1, name: 'Hydrogen', symbol: 'H'},
  {position: 2, name: 'Helium', symbol: 'He'},
  {position: 3, name: 'Lithium', symbol: 'Li'},
  {position: 4, name: 'Beryllium', symbol: 'Be'},
  {position: 5, name: 'Boron', symbol: 'B'},
  {position: 6, name: 'Carbon', symbol: 'C'},
  {position: 7, name: 'Nitrogen', symbol: 'N'},
  {position: 8, name: 'Oxygen', symbol: 'O'},
  {position: 9, name: 'Fluorine', symbol: 'F'},
  {position: 10, name: 'Neon', symbol: 'Ne'},
];






