import { Routes } from '@angular/router';
import { PantallaFacturasComponent } from './pantalla-facturas/pantalla-facturas.component';
import { PantallaListadoFacturasComponent } from './pantalla-listado-facturas/pantalla-listado-facturas.component';
import { PantallaClientesComponent } from './pantalla-clientes/pantalla-clientes.component';
import { PantallaProductosComponent } from './pantalla-productos/pantalla-productos.component';
import { PantallaLoginComponent } from './pantalla-login/pantalla-login.component';

export const APP_ROUTES: Routes = [
    { path: 'pantalla-facturas', component: PantallaFacturasComponent },
    { path: 'pantalla-listado-facturas', component: PantallaListadoFacturasComponent },
    { path: 'pantalla-clientes', component: PantallaClientesComponent },
    { path: 'pantalla-productos', component: PantallaProductosComponent },
    { path: 'pantalla-login', component: PantallaLoginComponent },
    { path: '', redirectTo: '/pantalla-facturas', pathMatch: 'full' }, // Redirige a 'main' por defecto
    { path: '**', redirectTo: '/pantalla-facturas' } // Redirige a 'main' si la ruta no existe
];
