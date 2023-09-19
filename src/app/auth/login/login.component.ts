
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder } from '@angular/forms'/*import {FormGroup, FormControl } from '@angular/forms'se utiliza para crear un grupo de controles de formulario que pueden representar una sección o un formulario completo en una aplicación 
*/
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
  
})

  export class LoginComponent  {
    LoginForm = new FormGroup({
      email: new FormControl,
      password: new FormControl
  
    })
  constructor(
    private servicioAuth: AuthService,
    
  ){}
  onLogin(){
    const {email, password}=this.LoginForm.value
  this.servicioAuth.register(email, password)
  }

  async salir(){
    const res = await this.servicioAuth.cerrarSesion()
    .then(res => {
      alert("Ha cerrado sesión con éxito.");
      console.log(res);

      //this.router.navigate(['/inicio']);
    })
  }
}

