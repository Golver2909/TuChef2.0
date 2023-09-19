import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa AngularFireAuth desde '@angular/fire/compat/auth'
//import { user } from 'firebase/compat/auth'; // Importa User desde 'firebase/compat/auth'
import { first } from 'rxjs/operators'; // Importa first de 'rxjs/operators'
import { firstValueFrom } from 'rxjs'; // Importa firstValueFrom de 'rxjs'




@Injectable()
export class AuthService {
 
  
  constructor(public AfAuth: AngularFireAuth) {}
  

  cerrarSesion(){
    // devuelve una promesa vacía
    return this.AfAuth.signOut();
  }

   async login(email:string, password:string){
    const result = await this.AfAuth.signInWithEmailAndPassword(email,password)
    return result;
   }
   

   async register(email:string, password:string){
    
    const result =  await this.AfAuth.createUserWithEmailAndPassword(email,password)
    return result;
  }
   async Logout(){
    await this.AfAuth.signOut();
    
  }

  getCurrentUser(){
    return firstValueFrom(this.AfAuth.authState);
  }
 
  
}
