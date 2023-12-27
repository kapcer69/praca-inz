import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductCard } from '../../models/product-card.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() products$!: Observable<ProductCard[]> | null;
}
