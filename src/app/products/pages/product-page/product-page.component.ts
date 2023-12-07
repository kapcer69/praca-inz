import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../models/product-card.model';
import { ProductApiService } from '../../services/product-api.service';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductFiltersComponent } from '../../components/product-filters/product-filters.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListComponent, ProductFiltersComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  providers: [ProductApiService],
})
export class ProductPageComponent implements OnInit {
  products!: ProductCard[];
  categories!: string[];

  constructor(private readonly productApi: ProductApiService) {}

  ngOnInit(): void {
    this.productApi.products$.subscribe(
      (products) => (this.products = products)
    );
    this.productApi.categories$.subscribe(
      (categories) => (this.categories = categories)
    );
  }
}
