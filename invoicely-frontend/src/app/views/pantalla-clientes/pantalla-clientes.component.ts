import { Component } from '@angular/core';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';

@Component({
  selector: 'app-pantalla-clientes',
  standalone: true,
  imports: [MenuSuperiorComponent],
  templateUrl: './pantalla-clientes.component.html',
  styleUrl: './pantalla-clientes.component.css'
})
export class PantallaClientesComponent {

}
