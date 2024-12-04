import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-side-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-info.component.html',
  styleUrls: ['./side-info.component.css']
})
export class SideInfoComponent {
  @Input() user: { name: string; surname: string; phone: string; address: string; type: string } | null = null;

  closeSideInfo() {
    const sideInfoElement = document.querySelector('.side-info') as HTMLElement;
    if (sideInfoElement) {
      sideInfoElement.style.display = 'none';
    }
  }
}

export interface User {
  name: string;
  surname: string;
  phone: string;
  address: string;
  type: string;
}

