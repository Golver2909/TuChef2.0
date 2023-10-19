import { Component } from '@angular/core'; // Importación del decorador Component de Angular
import { FormGroup, FormControl } from '@angular/forms'; // Importación de FormGroup y FormControl para trabajar con formularios
import { AuthService } from '../services/auth.service'; // Importación del servicio AuthService

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

  constructor(private servicioAuth: AuthService) {} // Constructor del componente con inyección de dependencia del servicio AuthService

  onRegister() { // Método para registrar un usuario
    const { email, password } = this.registerForm.value; // Obtención de los valores de correo electrónico y contraseña del formulario
    this.servicioAuth.register(email, password); // Llamada al método de registro del servicio AuthService
  }
}
