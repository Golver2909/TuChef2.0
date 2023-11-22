import { Component } from '@angular/core';
import { Receta } from 'src/app/models/receta';

@Component({
  selector: 'app-mostrar-receta',
  templateUrl: './mostrar-receta.component.html',
  styleUrls: ['./mostrar-receta.component.css']
})
export class MostrarRecetaComponent {
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
        duracion:"12 hs",
        porciones:"4",
      },
    ]
  }
}
