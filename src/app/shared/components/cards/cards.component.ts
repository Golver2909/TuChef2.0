import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { CrudService} from "src/app/modules/admin/service/crud.service";
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  coleccionRecetas:Receta []=[]

  receta:Receta[]=[]

  RecetaSeleccionada!:Receta;


  
  constructor(public servicioCrud: CrudService){
  
  }

  ngOnInit(): void{
    this.servicioCrud.obtenerRecetas().subscribe(Reteta=>{
      this.coleccionRecetas=Reteta;


    })
  }


  mostrarVer(info: Receta){
    // al seleccionar "ver más" el modal visible pasa a "true"
    
    // muestra la información del producto que se seleccione
    this.RecetaSeleccionada = info;
  }
 
}
