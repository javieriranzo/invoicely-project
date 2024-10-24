import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PopupCerrarSesionComponent } from '../popup-cerrar-sesion/popup-cerrar-sesion.component';

@Component({
  selector: 'app-menu-superior',
  standalone: true,
  imports: [
    RouterModule, 
    PopupCerrarSesionComponent,
    CommonModule
  ],
  templateUrl: './menu-superior.component.html',
  styleUrl: './menu-superior.component.css'
})
export class MenuSuperiorComponent {

  showLogoutPopup = false; // Para controlar la visibilidad del pop-up

}
