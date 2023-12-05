import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from "rxjs/operators";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {

  private userCollection:AngularFirestoreCollection<Usuario>

  //Importamos la base de datos y obtenemos los datos de usuarios
  constructor(private database:AngularFirestore, private auth:AngularFireAuth) {
    this.userCollection = database.collection('usuarios')
  }

  obtainUser(){
    //Se consulta y retorna los datos del usuario
    return this.userCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }

  async getUid(){
    //CurrentUser: Captura los datos
    const user = await this.auth.currentUser

    if(user == null){
      return null
    }else{
      return user.uid
    }
  }
}