import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { ProductCard } from '../../models/product-card.model';
import { ProductApiService } from '../../services/product-api.service';
import { Injectable } from '@angular/core';
import { exhaustMap, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export interface ProductPageState {
  products: ProductCard[];
  categories: string[];
  isLoading: boolean;
  error: string | null;
}

@Injectable()
export class ProductPageStore extends ComponentStore<ProductPageState> {
  private products$ = this.select((state) => state.products);
  private isLoading$ = this.select((state) => state.isLoading);
  private error$ = this.select((state) => state.error);
  private categories$ = this.select((state) => state.categories);
  vm$ = this.select({
    products: this.products$,
    categories: this.categories$,
    isLoading: this.isLoading$,
    error: this.error$,
  });
  addProducts = this.updater((state, products: ProductCard[]) => ({
    ...state,
    isLoading: false,
    products,
  }));
  setIsLoading = this.updater((state) => ({ ...state, isLoading: true }));
  setError = this.updater((state, error: HttpErrorResponse) => ({
    ...state,
    isLoading: false,
    error: error.message,
  }));

  constructor(private readonly productApi: ProductApiService) {
    super({ products: [], isLoading: false, error: null, categories: [] });
  }

  fetchProducts = this.effect((trigger$) => {
    return trigger$.pipe(
      tap(() => {
        this.setIsLoading();
      }),
      exhaustMap(() =>
        this.productApi.getProducts().pipe(
          tapResponse(
            (products) => this.addProducts(products),
            (err: HttpErrorResponse) => this.setError(err)
          )
        )
      )
    );
  });
}
