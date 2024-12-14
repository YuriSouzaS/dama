import { Component } from '@angular/core';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { FirstSectionComponent } from '../components/first-section/first-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CarouselComponent, FirstSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
