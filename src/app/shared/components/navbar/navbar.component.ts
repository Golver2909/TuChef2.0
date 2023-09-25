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
  

  constructor(private authSvc: AuthService) { }

  async ngOnInit() {
    console.log('Navbar');
    this.authSvc.getCurrentUser().subscribe((user) => {
      this.user = user;
     
      if (this.user) {
        this.Islogged=true
      }else{
        this.Islogged=false
      }
    })

  }

  onLogout() {
    this.authSvc.Logout();
  }


  
  async salir() {
   
    if (this.Islogged=true) {
      await this.authSvc.cerrarSesion();
    } 
    
    

    //this.router.navigate(['/inicio']); // Si tienes la intención de navegar a otra página, descomenta esta línea y asegúrate de importar Router desde '@angular/router'.
  }
}
