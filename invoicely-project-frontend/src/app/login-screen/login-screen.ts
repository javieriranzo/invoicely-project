import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-screen.html',
  styleUrl: './login-screen.css'
})
export class LoginScreen {

  loginForm: any;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    const { usuario, password } = this.loginForm.value;

    this.authService.login(usuario, password).subscribe({
      next: (ok) => {
        if (ok) {
          this.router.navigate(['/customers']);
        } else {
          this.errorMessage = 'Credenciales incorrectas.';
        }
      },
      error: () => this.errorMessage = 'Error al conectar con el servidor.'
    });
  }
}
