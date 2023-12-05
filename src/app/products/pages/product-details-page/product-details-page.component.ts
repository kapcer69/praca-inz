import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './product-details-page.component.html',
  styleUrl: './product-details-page.component.css',
})
export class ProductDetailsPageComponent {}
