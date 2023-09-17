import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  onLogin(){
    console.log('Form=>', this.LoginForm.value)
  }
}
