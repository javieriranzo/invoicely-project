import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-popup-mostrar-productos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './popup-mostrar-productos.component.html',
  styleUrl: './popup-mostrar-productos.component.css'
})
export class PopupMostrarProductosComponent {
  
  @Output() closePopupEvent = new EventEmitter<void>(); // Evento para cerrar el popup
  @Output() productoSeleccionado = new EventEmitter<any>(); // Evento para emitir el producto seleccionado

  showPopupProductos = true; // Mostrar el pop-up

  productos: any[] = [];
  productoSeleccionadoObj: any; // Almacena temporalmente el producto seleccionado

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  // Método para obtener los clientes desde el servicio
  obtenerProductos() {
    this.productoService.getProductos().subscribe(
      (data) => this.productos = data,
      (error) => console.error('Error al obtener productos:', error)
    );
  }

  seleccionarProducto(producto: any) {
    this.productoSeleccionadoObj = producto;
  }

  confirmarSeleccionProducto() {
    if (this.productoSeleccionadoObj) {
      // Emitimos el cliente seleccionado al componente padre
      this.productoSeleccionado.emit(this.productoSeleccionadoObj);
      this.closePopup();
    }
  }
  
  closePopup() {
    this.showPopupProductos = false;
    this.closePopupEvent.emit();
  }

}
