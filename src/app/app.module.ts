import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';//
import { AppComponent } from './app.component';//
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// FIREBASE
// Nos conectamos con la BD; NOS TRAE MÓDULOS NECESARIOS
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { PrincipalModule } from './modules/principal/principal.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './modules/pages/pages.module';

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // Configuración de módulos FIREBASE
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    SharedModule,
    PrincipalModule,
    SharedModule,
    PagesModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
