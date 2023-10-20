import { Component } from '@angular/core'; // Importación del decorador Component de Angular
import { FormGroup, FormControl } from '@angular/forms'; // Importación de FormGroup y FormControl para trabajar con formularios
import { AuthService } from '../services/auth.service'; // Importación del servicio AuthService
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
@Component({
  selector: 'app-register', // Selector del componente
  templateUrl: './register.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./register.component.css'], // Estilos CSS asociados al componente
  providers: [AuthService] // Proveedor del servicio AuthService
})
export class RegisterComponent {
  registerForm = new FormGroup({ // Creación de un formulario de grupo llamado registerForm
    email: new FormControl(), // Campo de formulario para el correo electrónico
    password: new FormControl() // Campo de formulario para la contraseña
  });

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public router: Router
     ) {} // Constructor del componente con inyección de dependencia del servicio AuthService

     
     
    // importación del modelo
    usuarios: Usuario = {
      uid: '',
      nombre: '',
      email: '',
      rol: '',
      contrasena: ''
    }

uid = '';

 // creamos nueva colección para Usuarios
 coleccionUsuarios: Usuario[] = [];

   async onRegister() { 
    const credenciales = {
      nombre: this.usuarios.nombre,
      contrasena: this.usuarios.contrasena
    };
    const res = await this.servicioAuth.register(credenciales.nombre, credenciales.contrasena)
    // método THEN devuelve misma promesa
    .then(res => {
      alert("Ha agregado un nuevo usuario con éxito :)");

      // llamamos una nueva ruta -> nos redirigimos
      this.router.navigate(["/inicio"]);
    })
    // método CATCH creará un error en caso de que algo salga mal
    .catch(error =>
      alert("Hubo un error al crear el usuario :( \n" + error)
    );

    // creamos constante UID para el UID que obtengamos
    const uid = await this.servicioAuth.getUid();

    // referenciamos el uid nuevo con el de usuario
    this.usuarios.uid = uid;

    // llamamos función guardarUser
    this.guardarUser()
  }
   async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    })
    .catch(error => {
      console.log('Error =>', error);
    })
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}
