import { Component } from '@angular/core'; // Importación del decorador Component de Angular
import { FormGroup, FormControl } from '@angular/forms'; // Importación de FormGroup y FormControl para trabajar con formularios
import { AuthService } from '../services/auth.service'; // Importación del servicio AuthService

@Component({
  selector: 'app-login', // Selector del componente
  templateUrl: './login.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./login.component.css'], // Estilos CSS asociados al componente
  providers: [AuthService] // Proveedor del servicio AuthService
})

export class LoginComponent {
  LoginForm = new FormGroup({ // Creación de un formulario de grupo llamado LoginForm
    email: new FormControl(), // Campo de formulario para el correo electrónico
    password: new FormControl() // Campo de formulario para la contraseña
  });

  constructor(private servicioAuth: AuthService) { } // Constructor del componente con inyección de dependencia del servicio AuthService

  async onLogin() { // Método para iniciar sesión
    const { email, password } = this.LoginForm.value; // Obtención de los valores de correo electrónico y contraseña del formulario
    this.servicioAuth.login(email, password); // Llamada al método de inicio de sesión del servicio AuthService
    alert("Se ha iniciado sesión con éxito :)"); // Alerta de inicio de sesión exitoso
  }

  
}

