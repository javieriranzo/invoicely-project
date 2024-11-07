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
  mostrarAddProductos = false; 
  showPopupClientes = false; 

  abrirPopupClientes() {
    this.showPopupClientes = true;
  }

  // Datos de factura
  currentYear: number;
  currentDate: string;

  constructor() {
    // Asignamos el año actual a `currentYear`
    this.currentYear = new Date().getFullYear();
    
    // Fecha actual
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];  
  }

  // Precio producto pruebas
  precioProducto: number = 100; // Valor inicial del precio producto, puede ser dinámico
  
  // Calculo de precio producto según cantidad
  cantidad: number = 0;
  precioTotal: number = 0;

  /*
  calcularPrecioTotal(index: number) {
    const producto = this.productos[index];
    producto.total = producto.precio * producto.cantidad;
  }
  */
  
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
  
  actualizarDatosCliente(clienteSeleccionado: any) {
    this.cliente = { ...clienteSeleccionado };
    this.showPopupClientes = false; // Cierra el popup después de seleccionar el cliente
  }

}