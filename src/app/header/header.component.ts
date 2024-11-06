import { Component } from '@angular/core';
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';
import { ListaCatalagoComponent } from '../lista-catalago/lista-catalago.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OffcanvasComponent, ListaCatalagoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
