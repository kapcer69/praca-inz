import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.css',
})
export class ProductFiltersComponent {
  @Input() categories$!: Observable<string[]> | null;
}
