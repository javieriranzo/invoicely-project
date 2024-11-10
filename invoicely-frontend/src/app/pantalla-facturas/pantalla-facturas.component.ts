import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
import { PopupMostrarProductosComponent } from '../popup-mostrar-productos/popup-mostrar-productos.component';
import { PopupMostrarClientesComponent } from '../popup-mostrar-clientes/popup-mostrar-clientes.component';

@Component({
  selector: 'app-pantalla-facturas',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    PopupMostrarProductosComponent,
    PopupMostrarClientesComponent
  ],
  templateUrl: './pantalla-facturas.component.html',
  styleUrls: ['./pantalla-facturas.component.css']
})

export class PantallaFacturasComponent {
  // Modales
  mostrarPopupProductos = false;
  mostrarPopupClientes = false;

  // Datos básicos de la factura
  numeroFactura: number = 0;
  anoActual: number = new Date().getFullYear();
  fechaActual: string = new Date().toISOString().split('T')[0]; // Fecha en formato ISO para el input date

  // Datos de cálculo de factura
  totalFactura: number = 0;
  descuentoFactura: number = 0;
  iva: number = 21;  // Presuponiendo IVA al 21%
  totalConIVA: number = 0;
  
  // Array para almacenar las líneas de productos seleccionados en la factura
  lineasFactura: any[] = [];
    
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

  constructor() {}

  abrirPopupClientes() {
    this.mostrarPopupClientes = true;
  }

  actualizarDatosCliente(clienteSeleccionado: any) {
    this.cliente = { ...clienteSeleccionado };
    this.mostrarPopupClientes = false;
  }

  actualizarDatosProducto(productoSeleccionado: any) {
    this.lineasFactura.push({
      nombre: productoSeleccionado.nombre,
      descripcion: productoSeleccionado.descripcion,
      precio: productoSeleccionado.precio,
      cantidad: 1,
      total: productoSeleccionado.precio
    });
    this.calcularTotalFactura();
    this.mostrarPopupProductos = false;
  }

  calcularTotalFactura() {
    const subtotal = this.lineasFactura.reduce((total, linea) => {
      return total + (linea.precio * linea.cantidad);
    }, 0);
    const descuento = (this.descuentoFactura / 100) * subtotal;
    this.totalFactura = subtotal - descuento;

    // Calcular el total con IVA
    this.totalConIVA = this.totalFactura * (1 + this.iva / 100);
  }

  actualizarDescuentoFactura(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.descuentoFactura = parseFloat(inputElement.value) || 0;
    this.calcularTotalConIVA();
  }

  calcularTotalConIVA(): void {
    const descuento = (this.totalFactura * this.descuentoFactura) / 100;
    const totalConDescuento = this.totalFactura - descuento;
    this.totalConIVA = totalConDescuento * (1 + this.iva / 100);
  }

  actualizarCantidad(linea: any) {
    linea.total = linea.precio * linea.cantidad;
    this.calcularTotalFactura();
  }

  eliminarLinea(index: number) {
    this.lineasFactura.splice(index, 1);
    this.calcularTotalFactura();
  }
}
