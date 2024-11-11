import { Routes } from '@angular/router';
import { PantallaFacturasComponent } from './views/pantalla-facturas/pantalla-facturas.component';
import { PantallaListadoFacturasComponent } from './views/pantalla-listado-facturas/pantalla-listado-facturas.component';
import { PantallaClientesComponent } from './views/pantalla-clientes/pantalla-clientes.component';
import { PantallaProductosComponent } from './views/pantalla-productos/pantalla-productos.component';
import { PantallaLoginComponent } from './views/pantalla-login/pantalla-login.component';

export const APP_ROUTES: Routes = [
    { path: 'pantalla-facturas', component: PantallaFacturasComponent },
    { path: 'pantalla-listado-facturas', component: PantallaListadoFacturasComponent },
    { path: 'pantalla-clientes', component: PantallaClientesComponent },
    { path: 'pantalla-productos', component: PantallaProductosComponent },
    { path: 'pantalla-login', component: PantallaLoginComponent },
    { path: '', redirectTo: '/pantalla-facturas', pathMatch: 'full' }, // Redirige a 'main' por defecto
    { path: '**', redirectTo: '/pantalla-facturas' } // Redirige a 'main' si la ruta no existe
];
