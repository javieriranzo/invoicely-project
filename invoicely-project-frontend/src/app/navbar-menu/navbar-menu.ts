import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar-menu',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './navbar-menu.html',
  styleUrl: './navbar-menu.css'
})
export class NavbarMenu {

  isLogin = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isLogin = this.router.url === '/login';
    });
  }
}
