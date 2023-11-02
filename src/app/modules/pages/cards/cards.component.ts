import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/receta';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  public info: Receta[];


  constructor(){
    this.info=[
      {
        id:"",
        titulo:"",
        descripcion:"", 
        imagen:"",
        categoria:"",
        duracion:""
      },
    ]
  }

  ngOnInit(): void{

  }
}
