import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { PantallaClientesComponent } from './pantalla-clientes/pantalla-clientes.component';
import { PantallaFacturasComponent } from './pantalla-facturas/pantalla-facturas.component';
import { PantallaListadoFacturasComponent } from './pantalla-listado-facturas/pantalla-listado-facturas.component';
import { PantallaProductosComponent } from './pantalla-productos/pantalla-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MenuSuperiorComponent, 
    PantallaClientesComponent, 
    PantallaFacturasComponent, 
    PantallaListadoFacturasComponent, 
    PantallaProductosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invoicely-frontend';
}
