import { Usuario } from 'src/app/models/usuario';
import { Injectable } from '@angular/core';
// importamos servicio de autentificación de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // referenciar Autentificación de Firebase
  private coleccionUsuarios:AngularFirestoreCollection<Usuario>

  constructor(
    public auth: AngularFireAuth,
    private database: AngularFirestore
    ) {this.coleccionUsuarios = database.collection('usuarios')}
    
  // función para el inicio de sesión
  iniciarSesion(email: string, contrasena: string){
    return this.auth.signInWithEmailAndPassword(email, contrasena);
    
  }

  cerrarSesion(){
    // devuelve una promesa vacía
    return this.auth.signOut();
  }

  // función para retornar nueva información para nombre y contrasena
  register(email: string, contrasena: string){
    return this.auth.createUserWithEmailAndPassword(email,contrasena);
    
  }

  // función asincronica para tomar UID
  async getUid(){
    // CURRENTUSER -> JUNTO A LA PROMESA, GENERA CAPTURA
    const user = await this.auth.currentUser;

    if(user == null){
      return null;
    }else{
      return user.uid;
    }
  }
  obtenerUsuario(){
    return this.coleccionUsuarios.snapshotChanges(). pipe(map(action => action.map(a => a.payload.doc.data())))
  }
}
