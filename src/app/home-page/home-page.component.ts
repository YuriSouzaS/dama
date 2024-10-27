import { Component } from '@angular/core';
import { ListaCatalagoComponent } from '../lista-catalago/lista-catalago.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ListaCatalagoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
