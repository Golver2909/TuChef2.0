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
        titulo:"Tarta de choclo",
        descripcion:"que buena tarta loco de clocho", 
        imagen:"https://img-global.cpcdn.com/recipes/1aa2efb053b648d9/1200x630cq70/photo.jpg",
        alt:"enserio que buena tarta esta muy buena",
        categoria:"Tartas",
        duracion:"12 hs"
      },
    ]
  }

  ngOnInit(): void{

  }
}
