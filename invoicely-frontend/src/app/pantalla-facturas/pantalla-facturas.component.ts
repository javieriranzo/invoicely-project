import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule directamente
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pantalla-facturas',
  standalone: true,  // Declarar como standalone component
  imports: [
    FormsModule,
    CommonModule
  ],  // Importar FormsModule aquí
  templateUrl: './pantalla-facturas.component.html',
  styleUrls: ['./pantalla-facturas.component.css']
})

export class PantallaFacturasComponent {
  currentYear: number;
  currentDate: string;
  
  precioProducto: number = 100; // Valor inicial del precio producto, puede ser dinámico
  cantidad: number = 0;
  precioTotal: number = 0;

  calcularPrecioTotal(): void {
    this.precioTotal = this.precioProducto * this.cantidad;
  }

  constructor() {
    // Asignamos el año actual a `currentYear`
    this.currentYear = new Date().getFullYear();
    
    // Fecha actual
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];  
  }
}