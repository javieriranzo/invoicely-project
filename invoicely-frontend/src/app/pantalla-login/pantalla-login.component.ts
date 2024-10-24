import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pantalla-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pantalla-login.component.html',
  styleUrl: './pantalla-login.component.css'
})
export class PantallaLoginComponent {

  constructor(private router: Router) {}

  signIn() {
    this.router.navigate(['/pantalla-facturas']);
  }

}
