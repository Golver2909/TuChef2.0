/*importes del modelo receta, del metodo OnInit y del servicio Crud*/
import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { CrudService} from "src/app/modules/admin/service/crud.service";
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']

})
export class CardsComponent {
  /*Se crea la coleccion receta para almacenar recetas*/
  coleccionRecetas:Receta []=[]


  /*Se aclara que se esperan los datos cargados*/
  RecetaSeleccionada!:Receta;


/*El servicio crud es capaz de usarse en otros ambitos del proyecto*/
  constructor(public servicioCrud: CrudService){

  }

  /*El OnInit inicializa para obtener datos Receta*/
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
