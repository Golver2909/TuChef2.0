import { Injectable,  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import { auth } from 'firebase/app';

//import { User } from "firebase/app";
import { first } from 'rxjs';
@Injectable()
export class AuthService {
  
  constructor(public AfAuth: AngularFireAuth) { }
  


   async Login(email:string, password:string){
    const result = await this.AfAuth.signInWithEmailAndPassword(email,password)
    return result;
   }
   

   async register(email:string, password:string){
    
    const result =  await this.AfAuth.createUserWithEmailAndPassword(email,password)
    return result
  }
   async Logout(){
    await this.AfAuth.signOut();
    
  }

  getCurrentUser(){
    return this.AfAuth.authState.pipe(first()).toPromise();
  }
 
  
}
