import { Component } from '@angular/core';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pantalla-clientes',
  standalone: true,
  imports: [
    MenuSuperiorComponent, 
    FormsModule
  ],
  providers: [
    provideHttpClient(), 
    ClienteService
  ],
  templateUrl: './pantalla-clientes.component.html',
  styleUrl: './pantalla-clientes.component.css'
})
export class PantallaClientesComponent {

  cliente: Cliente = new Cliente('', '', '', '', '', '', '', '', '', '');

  constructor(private clienteService: ClienteService) {}

  crearCliente() {
    this.clienteService.crearCliente(this.cliente).subscribe(
      (clienteGuardado) => {
        console.log('Cliente guardado:', clienteGuardado);
        alert('Cliente agregado exitosamente');
        this.cliente = new Cliente('', '', '', '', '', '', '', '', '', ''); // Reiniciamos el formulario
      },
      (error) => {
        console.error('Error al guardar cliente:', error);
        alert('Hubo un error al guardar el cliente');
      }
    );
  }

  limpiarCampos() {
    this.cliente = new Cliente('', '', '', '', '', '', '', '', '', ''); // Reinicia el formulario
  }

}
