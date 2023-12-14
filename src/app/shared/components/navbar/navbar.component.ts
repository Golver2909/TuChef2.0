import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CrudUserService } from '../../services/crud-user.service';
import { CrudService } from 'src/app/modules/admin/service/crud.service';
import { Receta } from 'src/app/models/receta';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  colectionUser: Usuario[] = [];
  userSelect!: Usuario //Recibe valores vacios
  coleccionRecetas: Receta[] = []; // Colección de todas las recetas
  RecetaSeleccionada!: Receta;

  busqueda:string=''

  constructor(public userService:CrudUserService, public servicioCrud: CrudService){

  }//Se declara de manera publica al servicio crud-user

  ngOnInit():void{
    this.userService.getUid()
    this.userService.obtainUser().subscribe(
      user=>{this.colectionUser=user}
    )
    this.servicioCrud.obtenerRecetas().subscribe(Receta => {
      this.coleccionRecetas = Receta;
    })
  }
}
