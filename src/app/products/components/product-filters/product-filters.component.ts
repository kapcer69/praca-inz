import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.css',
})
export class ProductFiltersComponent {
  @Input() categories!: string[];
  @Input() isLoading!: boolean;
  @Input() error!: string | null;
}
