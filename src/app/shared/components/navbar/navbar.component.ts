import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})

export class NavbarComponent implements OnInit {
  public Islogged = false;
  public user: any;
  email: string = "";

  constructor(private authSvc: AuthService) { }

  async ngOnInit() {
    console.log('Navbar');
    try {
      this.user = await this.authSvc.getCurrentUser();

      if (this.user && this.user.email) {
        this.Islogged = true;
        // Asignar el valor de email si existe
        this.email = this.user.email; // Asigna el valor de email si existe
      }
      
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      
    }
  }
  
  onLogout() {
    this.authSvc.Logout();
  }

  async salir() {
    const res = await this.authSvc.cerrarSesion();
    alert("Ha cerrado sesión con éxito.");
    console.log(res);
    //this.router.navigate(['/inicio']); // Si tienes la intención de navegar a otra página, descomenta esta línea y asegúrate de importar Router desde '@angular/router'.
  }
}
