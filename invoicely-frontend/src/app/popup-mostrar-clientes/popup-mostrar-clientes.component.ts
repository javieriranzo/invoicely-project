import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-popup-mostrar-clientes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './popup-mostrar-clientes.component.html',
  styleUrl: './popup-mostrar-clientes.component.css'
})
export class PopupMostrarClientesComponent implements OnInit {

  @Output() closePopupEvent = new EventEmitter<void>(); // Evento para cerrar el popup
  @Output() clienteSeleccionado = new EventEmitter<any>(); // Evento para emitir el cliente seleccionado
  
  showPopupClientes = true; // Mostrar el pop-up

  clientes: any[] = [];
  clienteSeleccionadoObj: any; // Almacena temporalmente el cliente seleccionado

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.obtenerClientes();
  }

  // Método para obtener los clientes desde el servicio
  obtenerClientes() {
    this.clienteService.getClientes().subscribe(
      (data) => this.clientes = data,
      (error) => console.error('Error al obtener clientes:', error)
    );
  }

  seleccionarCliente(cliente: any) {
    this.clienteSeleccionadoObj = cliente;
  }

  confirmarSeleccionCliente() {
    if (this.clienteSeleccionadoObj) {
      // Emitimos el cliente seleccionado al componente padre
      this.clienteSeleccionado.emit(this.clienteSeleccionadoObj);
      this.closePopup();
    }
  }
  
  closePopup() {
    this.showPopupClientes = false;
    this.closePopupEvent.emit();
  }

}
