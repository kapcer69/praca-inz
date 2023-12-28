import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductFiltersComponent } from '../../components/product-filters/product-filters.component';
import { ProductPageStore } from './product-page.store';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductListComponent, ProductFiltersComponent, AsyncPipe],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  providers: [ProductPageStore],
})
export class ProductPageComponent implements OnInit {
  vm$ = this.productPageStore.vm$;

  constructor(private productPageStore: ProductPageStore) {}

  ngOnInit(): void {
    this.productPageStore.fetchProducts();
    this.productPageStore.fetchCategories();
  }
}
