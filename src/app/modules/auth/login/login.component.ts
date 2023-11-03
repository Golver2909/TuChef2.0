
import { Usuario } from 'src/app/models/usuario';

import { Component } from '@angular/core'; // Importación del decorador Component de Angular
import { FormGroup, FormControl } from '@angular/forms'; // Importación de FormGroup y FormControl para trabajar con formularios
import { AuthService } from '../services/auth.service'; // Importación del servicio AuthService

import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login', // Selector del componente
  templateUrl: './login.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./login.component.css'], // Estilos CSS asociados al componente
  providers: [AuthService] // Proveedor del servicio AuthService
})

export class LoginComponent {
  hide = true;


  usuarios: Usuario = {
    uid: '',
    nombre: '',
    rol: 'usuario',
    email: '',
    contrasena: ''
  }
  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router,
   
    ) {  }

    coleccionUsuarios: Usuario[] = [];


    async iniciar(){
      const credenciales = {
        email: this.usuarios.email,
        contrasena: this.usuarios.contrasena
        
        
      };


      const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)

      .then(res => {
        alert("Ha accedido con éxito :)");
        console.log(credenciales.email);

        this.router.navigate(['/inicio']);
      })

      .catch(error => {
        alert("Hubo un error al iniciar sesión :( \n"+error);

        console.log(credenciales.email);
      })
    }

    async salir(){
      const res = await this.servicioAuth.cerrarSesion()
      .then(res => {
        alert("Ha cerrado sesión con éxito.");
        console.log(res);

        this.router.navigate(['/inicio']);
      })
    }
   
    

    ngOnInit(): void{
      this.servicioAuth.obtenerUsuario().subscribe(usuario => {
        this.coleccionUsuarios = usuario;
      })
    }


    
    
}
