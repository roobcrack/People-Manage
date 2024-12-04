import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideInfoComponent } from './side-info/side-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideInfoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'People-Manage';
  users: User[] = [
    { name: 'Juan', surname: 'Pérez', phone: '123456789', address: 'Calle 1, Ciudad', type: 'Person' },
    { name: 'María', surname: 'López', phone: '987654321', address: 'Avenida 2, Ciudad', type: 'Client' },
    { name: 'Carlos', surname: 'González', phone: '555444333', address: 'Barrio 3, Ciudad', type: 'Funcionary' },
    { name: 'Paco', surname: 'Martínez', phone: '111222333', address: 'Plaza 4, Ciudad', type: 'Person' },
    { name: 'Jose', surname: 'Ferrer', phone: '283948283', address: 'Urba 3, Ciudad', type: 'Person' },
    { name: 'Luis', surname: 'Santos', phone: '293949392', address: 'Camino 12, Ciudad', type: 'Funcionary' },
    { name: 'Esteban', surname: 'Correas', phone: '685949302', address: 'Avenida 3, Ciudad', type: 'Client' }
  ];

  selectedUser: { name: string; surname: string; phone: string; address: string; type: string } | null = null;

  onUserClick(user: { name: string; surname: string; phone: string; address: string; type: string }): void {
    this.selectedUser = user;
  }
}

export interface User {
  name: string;
  surname: string;
  phone: string;
  address: string;
  type: string;
}

