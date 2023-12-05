import { Component } from '@angular/core';
import { Novedades } from 'src/app/models/novedades';

@Component({
  selector: 'app-pagina-recetas',
  templateUrl: './pagina-recetas.component.html',
  styleUrls: ['./pagina-recetas.component.css']
})
export class PaginaRecetasComponent {
  colectNovedad: Novedades[]=[]
  novedadSelect!: Novedades

}
