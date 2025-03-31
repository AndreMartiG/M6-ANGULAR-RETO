import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {  
  menuItems = ["Inicio", "Necesidades", "Productos y Servicios", "Educación Financiera"];
}
