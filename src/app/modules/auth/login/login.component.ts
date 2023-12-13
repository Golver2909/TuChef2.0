
import { Usuario } from 'src/app/models/usuario';

import { Component } from '@angular/core'; // Importación del decorador Component de Angular
import { FormGroup, FormControl } from '@angular/forms'; // Importación de FormGroup y FormControl para trabajar con formularios
import { AuthService } from '../services/auth.service'; // Importación del servicio AuthService

import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'], 
  providers: [AuthService] 
})

export class LoginComponent {


//Se define una propiedad llamada usuarios de tipo Usuario para almacenar la información del usuario
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    rol: 'usuario',
    email: '',
    contrasena: ''
  }   

  //Se inyectan los servicios AuthService, FirestoreService y el router Router en el constructor del componente.
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
    //Se define un método salir que utiliza el servicio de autenticación (AuthService) para cerrar sesión
    async salir(){
      const res = await this.servicioAuth.cerrarSesion()
      .then(res => {
        alert("Ha cerrado sesión con éxito.");
        console.log(res);

        this.router.navigate(['/inicio']);
      })
    }
   
 
//servicio de autenticación para obtener información del usuario apenas inicie la pagina 
    ngOnInit(): void{
      this.servicioAuth.obtenerUsuario().subscribe(usuario => {
        this.coleccionUsuarios = usuario;
      })
    }

    
}
