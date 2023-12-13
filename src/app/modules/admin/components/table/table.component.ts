import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Receta } from 'src/app/models/receta';
import { CrudService } from "../../service/crud.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  coleccionRecetas:Receta []=[]//colecciona todas las recetas



  RecetaSeleccionada!:Receta;

  Receta = new FormGroup({  //formGruop para capturar los datos desde el html
    //con un formControlName capturo los siguientes datos
    titulo: new FormControl('',Validators.required),
    descripcion:new FormControl('',Validators.required),
    imagen:new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required),
    ingredientes: new FormControl('', Validators.required),
    duracion: new FormControl('',Validators.required),
    porciones: new FormControl('',Validators.required),




  })

  constructor(// inyecto de manera publica el crud service y el router 
    public servicioCrud: CrudService,
    public router: Router
    ){}


  ngOnInit(): void{//obtiene la recetas apena inicializa,
    this.servicioCrud.obtenerRecetas().subscribe(Receta => {//subscribe si hay cambios actualiza la propiedad coleccionRecetas 
      this.coleccionRecetas = Receta;
    })//resumen: carga las recetas al componente cuando este inicializa 
  }




  mostrarEditar(RecetaSeleccionada: Receta){
    this.RecetaSeleccionada = RecetaSeleccionada;

    this.Receta.setValue({//(coloca los valores en los inputs)
      titulo: RecetaSeleccionada.titulo,
      descripcion: RecetaSeleccionada.descripcion,
      imagen: RecetaSeleccionada.imagen,
      alt: RecetaSeleccionada.alt,
      ingredientes: RecetaSeleccionada.ingredientes,
      duracion: RecetaSeleccionada.duracion,
      porciones: RecetaSeleccionada.porciones

    })
  


  }

editarReceta(){

  let datos: Receta = {
    id: this.RecetaSeleccionada.id,
    titulo: this.Receta.value.titulo!,
    descripcion: this.Receta.value.descripcion!,
    imagen: this.Receta.value.imagen!,
    alt: this.Receta.value.alt!,
    ingredientes:this.Receta.value.ingredientes!,
    duracion: this.Receta.value.duracion!,
    porciones: this.Receta.value.porciones!
  }

  this.servicioCrud.modificarrReceta(this.RecetaSeleccionada.id,datos)
  .then(Receta => {
    alert("La Receta fue modificado con éxito :).");
  })
  .catch(error => {
    alert("la receta no se pudo modificar :( \n"+error);
  })
}



borrarReceta(RecetaSeleccionada: Receta){
  this.RecetaSeleccionada = RecetaSeleccionada; // asigna Receta elegido

  if(confirm("¿Está seguro?") === true){
    this.servicioCrud.eliminarReceta(this.RecetaSeleccionada.id)
  .then(respuesta => {
    alert("La Receta se ha eliminado correctamente :)");
  })
  .catch(error => {
    alert("No se ha podido eliminar la Receta :( \n"+error);
  })
  }
}
}


