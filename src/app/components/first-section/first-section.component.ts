import { Component } from '@angular/core';
import { SectionProductComponent } from '../section-product/section-product.component';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [SectionProductComponent],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css'
})
export class FirstSectionComponent {

}
