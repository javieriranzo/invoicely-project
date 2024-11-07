import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-popup-cerrar-sesion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-cerrar-sesion.component.html',
  styleUrl: './popup-cerrar-sesion.component.css'
})
export class PopupCerrarSesionComponent {

  @Output() closePopupEvent = new EventEmitter<void>(); // Evento para cerrar el popup
  showPopup = true; // Mostrar el pop-up

  constructor(private router: Router) {}

  // Redirige al login si se confirma
  logout() {
    this.router.navigate(['/pantalla-login']);
  }

  // Cierra el pop-up si se pulsa "No"
  closePopup() {
    this.showPopup = false;
    this.closePopupEvent.emit();
  }

}
