import { Component } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { CrudService } from '../../service/crud.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
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
