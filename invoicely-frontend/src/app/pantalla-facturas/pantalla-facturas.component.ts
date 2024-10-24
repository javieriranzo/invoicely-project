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
  // Tu lógica de la factura
  factura = {
    cliente: '',
    fecha: '',
    items: [
      { descripcion: '', cantidad: 1, precio: 0 }
    ]
  };

  agregarItem() {
    this.factura.items.push({ descripcion: '', cantidad: 1, precio: 0 });
  }

  calcularTotal() {
    return this.factura.items.reduce((total, item) => total + (item.cantidad * item.precio), 0);
  }

  onSubmit() {
    alert('Factura guardada exitosamente');
    console.log(this.factura);
  }

  onCancelar() {
    if (confirm('¿Estás seguro de cancelar la creación de la factura?')) {
      this.factura = {
        cliente: '',
        fecha: '',
        items: [
          { descripcion: '', cantidad: 1, precio: 0 }
        ]
      };
    }
  }
}