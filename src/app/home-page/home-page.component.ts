import { Component } from '@angular/core';
import { CarouselComponent } from '../components/carousel/carousel.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
