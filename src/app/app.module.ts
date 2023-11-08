import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';//import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AppComponent } from './app.component';//import { environment } from 'src/environments/environment';import { AngularFireModule } from "@angular/fire/compat";import { AngularFireAuthModule } from "@angular/fire/compat/auth";


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Importacion modulos de Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
