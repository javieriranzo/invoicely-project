import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarMenu } from './navbar-menu/navbar-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('invoicely-project-frontend');
}
