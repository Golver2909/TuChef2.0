

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import {environment} from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; // CLOUD FIRESTORE
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // AUTENTIFICACIÓN



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    //modulos de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
