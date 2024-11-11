import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from './views/menu-superior/menu-superior.component';
import { PantallaClientesComponent } from './views/pantalla-clientes/pantalla-clientes.component';
import { PantallaFacturasComponent } from './views/pantalla-facturas/pantalla-facturas.component';
import { PantallaListadoFacturasComponent } from './views/pantalla-listado-facturas/pantalla-listado-facturas.component';
import { PantallaLoginComponent } from './views/pantalla-login/pantalla-login.component';
import { PopupCerrarSesionComponent } from './views/popup-cerrar-sesion/popup-cerrar-sesion.component';
import { PopupMostrarProductosComponent } from './views/popup-mostrar-productos/popup-mostrar-productos.component';
import { PopupMostrarClientesComponent } from './views/popup-mostrar-clientes/popup-mostrar-clientes.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    MenuSuperiorComponent,
    CommonModule,
    PantallaClientesComponent,
    PantallaFacturasComponent,
    PantallaListadoFacturasComponent,
    PantallaLoginComponent,
    PopupCerrarSesionComponent,
    PopupMostrarProductosComponent,
    PopupMostrarClientesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invoicely-frontend';
  showMenu = true;

  constructor(private router: Router) {
    // Detectar cambios de ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verificar si la ruta es '/pantalla-login' y ocultar el menú si es el caso
        this.showMenu = event.url !== '/pantalla-login';
      }
    });
  }
}
