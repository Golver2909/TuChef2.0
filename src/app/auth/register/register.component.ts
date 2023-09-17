import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder } from '@angular/forms'/*import {FormGroup, FormControl } from '@angular/forms'se utiliza para crear un grupo de controles de formulario que pueden representar una sección o un formulario completo en una aplicación 
*/
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
  
})
export class RegisterComponent  {
  registerForm = new FormGroup({
    email: new FormControl,
    password: new FormControl

  })




constructor(
  public servicioAuth: AuthService,
  
){}




onRegister() {
  
  const {email, password}=this.registerForm.value
  this.servicioAuth.register(email, password)
}
}
