import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms'
/*
 import {FormGroup, FormControl } from '@angular/forms'
 se utiliza para crear un grupo de controles de formulario que 
 pueden representar una sección o un formulario completo en una 
 aplicación 
*/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm = new  FormGroup({
  email: new FormControl (''),
  password: new FormControl (''),
})
}
