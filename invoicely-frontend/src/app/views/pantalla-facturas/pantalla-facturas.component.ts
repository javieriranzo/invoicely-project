import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
import { PopupMostrarProductosComponent } from '../popup-mostrar-productos/popup-mostrar-productos.component';
import { PopupMostrarClientesComponent } from '../popup-mostrar-clientes/popup-mostrar-clientes.component';
import { Factura } from '../../models/factura.model';
import { Cliente } from '../../models/cliente.model';
import { LineaFactura } from '../../models/linea-factura.model';

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
  
  mostrarPopupProductos = false;
  mostrarPopupClientes = false;

  numeroFactura: number = 0;
  anoActual: number = new Date().getFullYear();
  fechaActual: string = new Date().toISOString().split('T')[0];
  horaActual: string = new Date().toTimeString().slice(0, 5);

  cliente = new Cliente();
  factura = new Factura(this.cliente);

  constructor() {}

  abrirPopupClientes() {
    this.mostrarPopupClientes = true;
  }

  actualizarDatosCliente(clienteSeleccionado: Cliente) {
    this.cliente = clienteSeleccionado;
    this.factura.cliente = clienteSeleccionado;
    this.mostrarPopupClientes = false;
  }

  actualizarDatosProducto(productoSeleccionado: any) {
    const linea = new LineaFactura(
      productoSeleccionado.nombre,
      productoSeleccionado.descripcion,
      productoSeleccionado.precio
    );
    this.factura.agregarLinea(linea);
    this.mostrarPopupProductos = false;
  }

  actualizarDescuentoFactura(): void {
    this.factura.actualizarTotalConDescuento();
  }

  actualizarCantidad(linea: LineaFactura) {
    linea.actualizarTotal();
    this.factura.actualizarSubtotal();
  }

  eliminarLinea(index: number) {
    this.factura.eliminarLinea(index);
  }

}