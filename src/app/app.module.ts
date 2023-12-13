import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';//
import { AppComponent } from './app.component';//
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeRoutingModule } from './modules/home/home-routing.module';
// FIREBASE
// Nos conectamos con la BD; NOS TRAE MÓDULOS NECESARIOS
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { PrincipalModule } from './modules/principal/principal.module';
import { PagesModule } from './modules/pages/pages.module';

import {MatCardModule} from '@angular/material/card';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { DatosRecetaComponent } from './modules/pages/datos-receta/datos-receta.component';




//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // Configuración de módulos FIREBASE
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    SharedModule,
    PrincipalModule,

    BrowserAnimationsModule,
    MatCardModule,
    PagesModule,
    AuthModule,
    AdminModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
