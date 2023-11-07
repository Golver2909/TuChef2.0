import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private userCollection:AngularFirestoreCollection<Usuario>

  //Importamos la base de datos y obtenemos los datos de usuarios
  constructor(private database:AngularFirestore) {
    this.userCollection = database.collection('usuarios')
  }

  obtainUser(){
    //Se consulta y retorna los datos del usuario
    return this.userCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
}