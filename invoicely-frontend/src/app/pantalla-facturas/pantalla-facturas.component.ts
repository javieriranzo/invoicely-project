import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importar FormsModule directamente
import { CommonModule } from '@angular/common';
import { PopupMostrarProductosComponent } from '../popup-mostrar-productos/popup-mostrar-productos.component';
import { PopupMostrarClientesComponent } from '../popup-mostrar-clientes/popup-mostrar-clientes.component';

@Component({
  selector: 'app-pantalla-facturas',
  standalone: true,  // Declarar como standalone component
  imports: [
    FormsModule,
    CommonModule,
    PopupMostrarProductosComponent,
    PopupMostrarClientesComponent
  ],  // Importar FormsModule aquí
  templateUrl: './pantalla-facturas.component.html',
  styleUrls: ['./pantalla-facturas.component.css']
})

export class PantallaFacturasComponent {
  
  // Modales
  showPopupProductos = false; 
  showPopupClientes = false; 

  abrirPopupClientes() {
    this.showPopupClientes = true;
  }

  // Datos de factura
  currentYear: number;
  currentDate: string;
  
  // Array para almacenar las líneas de productos seleccionados en la factura
  lineasFactura: any[] = [];

  // Total de la factura
  totalFactura: number = 0;

  constructor() {
    // Asignamos el año actual a `currentYear`
    this.currentYear = new Date().getFullYear();
    
    // Fecha actual
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];  
  }

  // Datos del cliente en el formulario
  cliente = {
    nombre: '',
    apellido: '',
    dniCif: '',
    direccion: '',
    codigoPostal: '',
    poblacion: '',
    provincia: '',
    pais: '',
    telefono: '',
    email: ''
  };

  // Datos del producto en el formulario 
  producto = {
    nombre: '', 
    descripcion: '',
    precio: 0
  };

  actualizarDatosCliente(clienteSeleccionado: any) {
    this.cliente = { ...clienteSeleccionado };
    // Cierra el popup después de seleccionar el cliente
    this.showPopupClientes = false; 
  }

  actualizarDatosProducto(productoSeleccionado: any) {
    // Añadir una nueva línea de producto a `lineasFactura`
    this.lineasFactura.push({
      nombre: productoSeleccionado.nombre,
      descripcion: productoSeleccionado.descripcion,
      precio: productoSeleccionado.precio,
      cantidad: 1, // Inicializar con cantidad 1
      total: productoSeleccionado.precio // Total inicial es precio * cantidad
    });
    this.calcularTotalFactura(); // Recalcular el total de la factura
    // Cierra el popup después de seleccionar el producto
    this.showPopupProductos = false; 
  }

  calcularTotalFactura() {
    // Calcular el total de la factura sumando cada línea de producto (precio * cantidad)
    this.totalFactura = this.lineasFactura.reduce((total, linea) => {
      return total + (linea.precio * (linea.cantidad || 0));
    }, 0);
  }

  // Método para actualizar el total cuando cambia la cantidad de un producto
  actualizarCantidad(linea: any) {
    linea.total = linea.precio * linea.cantidad;
    this.calcularTotalFactura(); // Recalcular el total general
  }

  // Método para eliminar una línea de producto
  eliminarLinea(index: number) {
    this.lineasFactura.splice(index, 1); // Eliminar línea de producto
    this.calcularTotalFactura(); // Recalcular el total de la factura
  }
}
