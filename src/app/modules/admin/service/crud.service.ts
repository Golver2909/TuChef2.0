import { Injectable } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private productosReceta: AngularFirestoreCollection<Receta>; // Colección que almacena todas las recetas

  constructor(private database: AngularFirestore) {
    this.productosReceta = database.collection('Receta');
  }

  // Crear una nueva receta
  crearReceta(Receta: Receta) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = this.database.createId(); // Generar un ID automático
        Receta.id = id;

        const resultado = await this.productosReceta.doc(id).set(Receta);
        resolve(resultado);

      } catch (error) {
        reject(error);
        alert("Se detectó un error al crear una receta.\n" + error);
      }
    });
  }

  // Obtener todas las recetas
  obtenerRecetas() {
    return this.productosReceta.snapshotChanges().pipe(
      map(action => action.map(a => a.payload.doc.data()))
    );
  }

  // Modificar una receta existente por ID
  modificarrReceta(id: string, nuevaData: Receta) {
    return this.database.collection('Receta').doc(id).update(nuevaData);
  }

  // Eliminar una receta por ID
  eliminarReceta(id: string) {
    return new Promise((resolve, reject) => {
      try {
        const resp = this.productosReceta.doc(id).delete();
        resolve(resp);
      } catch (error) {
        reject(error);
        alert("Se produjo un error al eliminar el producto.\n" + error);
      }
    });
  }
}
