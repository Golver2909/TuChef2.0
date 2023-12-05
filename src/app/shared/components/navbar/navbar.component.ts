import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CrudUserService } from '../../services/crud-user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  colectionUser: Usuario[] = [];
  userSelect!: Usuario //Recibe valores vacios

  constructor(public userService:CrudUserService){}//Se declara de manera publica al servicio crud-user

  ngOnInit():void{
    this.userService.getUid()
    this.userService.obtainUser().subscribe(
      user=>{this.colectionUser=user}
    )
  }
}
