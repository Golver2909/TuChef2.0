import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa AngularFireAuth desde '@angular/fire/compat/auth'
//import { user } from 'firebase/compat/auth'; // Importa User desde 'firebase/compat/auth'
import { first } from 'rxjs/operators'; // Importa first de 'rxjs/operators'
import { firstValueFrom } from 'rxjs'; // Importa firstValueFrom de 'rxjs'
import { Usuario } from 'src/app/models/usuario';

@Injectable()
export class AuthService {
  constructor(public AfAuth: AngularFireAuth) {}

  cerrarSesion() {
    // devuelve una promesa vacía
    return this.AfAuth.signOut();
  }

  async login(email: string, password: string) {
    const result = await this.AfAuth.signInWithEmailAndPassword(
      email,
      password
    );
    return result;
  }

  async register(nombre: string, password: string) {
    const result = await this.AfAuth.createUserWithEmailAndPassword(
      nombre,
      password    
    );
    return result;
  }
  async Logout() {
    await this.AfAuth.signOut();
  }

  getCurrentUser() {
    return this.AfAuth.authState;
  }

  async getUid() {
    // CURRENTUSER -> JUNTO A LA PROMESA, GENERA CAPTURA
    const user = await this.AfAuth.currentUser;

    if (user == null) {
      return null;
    } else {
      return user.uid;
    }
  }
}
