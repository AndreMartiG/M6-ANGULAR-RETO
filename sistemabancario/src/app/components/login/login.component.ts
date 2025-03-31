import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from '../state/state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private formbuilder = inject(FormBuilder);
  
  constructor(private router: Router, public state: State) { }

  loginForm = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  submit() {
    if (this.loginForm.invalid) { 
      console.log('Invalid form');
      return; 
    }
    this.state.userEmail = this.loginForm.getRawValue().email;
    this.state.userEmail$.subscribe(value => console.log(value));
    this.state.userId = 3; // Simulación de ID de usuario
    this.router.navigateByUrl('/home');
  }
}
