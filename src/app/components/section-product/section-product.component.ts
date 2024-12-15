import { Component } from '@angular/core';

@Component({
  selector: 'app-section-product',
  standalone: true,
  imports: [],
  templateUrl: './section-product.component.html',
  styleUrl: './section-product.component.css'
})
export class SectionProductComponent {
  image: string = "imgs/queijos.png";
  name: string = "Pão italiano";
  price: number = 0.25;
  amount: number = 100;

}
