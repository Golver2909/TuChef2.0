import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Receta } from 'src/app/models/receta';
import { CrudService } from "../../admin/service/crud.service";

@Component({
  selector: 'app-mostrar-receta',
  templateUrl: './mostrar-receta.component.html',
  styleUrls: ['./mostrar-receta.component.css']
})
export class MostrarRecetaComponent {
  coleccionRecetas: Receta[] = []; // Colección de todas las recetas
  RecetaSeleccionada!: Receta;

  // Formulario para la Receta
  Receta = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    duracion: new FormControl('', Validators.required),
    porciones: new FormControl('', Validators.required),
  })

  constructor(public servicioCrud: CrudService) {}

  ngOnInit(): void {
    // Obtener recetas al inicializar el componente
    this.servicioCrud.obtenerRecetas().subscribe(Receta => {
      this.coleccionRecetas = Receta;
    })
  }

  // Agregar nueva Receta
  async agregarReceta() {
    if (this.Receta) {
      let nuevaReceta: Receta = {
        id: '',
        titulo: this.Receta.value.titulo!,
        descripcion: this.Receta.value.descripcion!,
        imagen: this.Receta.value.imagen!,
        alt: this.Receta.value.alt!,
        categoria: this.Receta.value.categoria!,
        duracion: this.Receta.value.duracion!,
        porciones: this.Receta.value.porciones!
      };

      // Llamamos al servicioCrud; función crearReceta; seteamos nuevaReceta
      await this.servicioCrud.crearReceta(nuevaReceta)
        .then(Receta => {
          alert("Ha agregado un nuevo Receta con éxito. ¡Espero que lo disfrute! :)");
        })
        .catch(error => {
          alert("Hubo un error al cargar nuevo Receta :( \n" + error);
        })
    }
  }

  // Mostrar modal de edición con datos de la Receta seleccionada
  mostrarEditar(RecetaSeleccionada: Receta) {
    this.RecetaSeleccionada = RecetaSeleccionada;

    this.Receta.setValue({
      titulo: RecetaSeleccionada.titulo,
      descripcion: RecetaSeleccionada.descripcion,
      imagen: RecetaSeleccionada.imagen,
      alt: RecetaSeleccionada.alt,
      categoria: RecetaSeleccionada.categoria,
      duracion: RecetaSeleccionada.duracion,
      porciones: RecetaSeleccionada.porciones
    });
  }

  // Editar la Receta seleccionada
  editarReceta() {
    let datos: Receta = {
      id: this.RecetaSeleccionada.id,
      titulo: this.Receta.value.titulo!,
      descripcion: this.Receta.value.descripcion!,
      imagen: this.Receta.value.imagen!,
      alt: this.Receta.value.alt!,
      categoria: this.Receta.value.categoria!,
      duracion: this.Receta.value.duracion!,
      porciones: this.Receta.value.porciones!
    }

    this.servicioCrud.modificarrReceta(this.RecetaSeleccionada.id, datos)
      .then(Receta => {
        alert("El Receta fue modificado con éxito :).");
      })
      .catch(error => {
        alert("No se pudo modificar el Receta :( \n" + error);
      })
  }

  // Mostrar modal de confirmación antes de borrar la Receta
  mostrarBorrar(RecetaSeleccionado: Receta) {
    this.RecetaSeleccionada = RecetaSeleccionado; // Asigna la Receta elegida
  }

  // Eliminar la Receta seleccionada
  borrarReceta() {
    this.servicioCrud.eliminarReceta(this.RecetaSeleccionada.id)
      .then(respuesta => {
        alert("El Receta se ha eliminado correctamente :)");
      })
      .catch(error => {
        alert("No se ha podido eliminar el Receta :( \n" + error);
      })
  }
}
