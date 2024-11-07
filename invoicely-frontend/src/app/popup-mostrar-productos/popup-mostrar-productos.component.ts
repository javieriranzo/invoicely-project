import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-mostrar-productos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './popup-mostrar-productos.component.html',
  styleUrl: './popup-mostrar-productos.component.css'
})
export class PopupMostrarProductosComponent {
  
  @Output() closePopupEvent = new EventEmitter<void>(); // Evento para cerrar el popup
  showPopup = true; // Mostrar el pop-up
  
  closePopup() {
    this.showPopup = false;
    this.closePopupEvent.emit();
  }

  productosDisponibles = [
    { nombre: 'Producto 1', precio: 50 },
    { nombre: 'Producto 2', precio: 100 },
    { nombre: 'Producto 3', precio: 150 },
    // Agrega más productos según sea necesario
  ];

}
