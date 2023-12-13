import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CrudUserService } from '../../services/crud-user.service';
import { Receta } from 'src/app/models/receta';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  colectionUser: Usuario[] = [];
  coleccioReceta:Receta [] = [];
  constructor(public userService:CrudUserService){}//Se declara de manera publica al servicio crud-user

  ngOnInit():void{
    this.userService.getUid()
    this.userService.obtainUser().subscribe(
      user=>{this.colectionUser=user}
    )
  }
}
