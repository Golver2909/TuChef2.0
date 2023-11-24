import { Injectable } from '@angular/core';
import { Receta } from 'src/app/models/receta';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
private productosReceta:AngularFirestoreCollection<Receta>


constructor(private database: AngularFirestore) {
  this.productosReceta = database.collection('productos')


}
crearReceta(Receta:Receta){
  return new Promise (async(resolve, reject)=>{
    try{
      const id= this.database.createId();
      Receta.id=id

      const resultado =await this.productosReceta.doc(id).set(Receta)
      resolve(resultado);

    }catch(error){
      reject(error)
      alert("se detecto un error al crear un receta \n"+error)
    }
  })
}


 obtenerRecetas(){
  return this.productosReceta.snapshotChanges().
  pipe(map(action =>action.map(a=>a.payload.doc.data())))
 }


 modificarrReceta(id:string,   nuevaData:Receta){
  return this.database.collection('receta').doc(id).update(nuevaData)
 }
 


 aliminarReceta(id:string){
  return new Promise((resolve, reject) =>{
    try{
      const resp = this.productosReceta.doc(id).delete()
      resolve (resp)
    }
    catch(error){
      reject (error)
      alert("se produjo un error al eliminar el producto \n"+error)
    }
  })
}




}
