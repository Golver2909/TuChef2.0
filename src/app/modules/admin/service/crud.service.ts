import { Injectable } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
private productosReceta:AngularFirestoreCollection<Receta>//colecciona todas las recetas


constructor(private database: AngularFirestore) {
   // Inicializa la colección 'Receta' en AngularFirestore
  this.productosReceta = database.collection('Receta')
  //agregado: esto permite establecer una conexion a la coleccion Receta en firebase 


}
crearReceta(Receta:Receta){
  return new Promise (async(resolve, reject)=>{//se utiliza una promesa para manenjar la operacion de manera asincronica 
    try{
      const id= this.database.createId();//Id automatico
      Receta.id=id

      const resultado =await this.productosReceta.doc(id).set(Receta)// agrega una receta en la colecion Receta 
      resolve(resultado);// si la operassion tiene exito se resuelve con el resultado 

    }catch(error){//si hay un erro rechaza la promesa 
      reject(error)
      alert("se detecto un error al crear un receta \n"+error)
    }
  })
}


 obtenerRecetas(){
  return this.productosReceta.snapshotChanges().
  pipe(map(action =>action.map(a=>a.payload.doc.data())))
 }//estudiar


 modificarrReceta(id:string,   nuevaData:Receta){
  return this.database.collection('Receta').doc(id).update(nuevaData)

 }
 


eliminarReceta(id:string){
  return new Promise((resolve, reject) =>{
    try{
      const resp = this.productosReceta.doc(id).delete()
      resolve (resp)
    }
    catch(error){
      reject (error)
      alert("se produjo un error al eliminar el producto  \n"+error)
    }
  })
}

 


}
