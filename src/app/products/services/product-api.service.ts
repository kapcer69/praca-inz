import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductCard } from '../models/product-card.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private productsSubject: BehaviorSubject<ProductCard[]> = new BehaviorSubject<
    ProductCard[]
  >([]);

  private categoriesSubject: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);

  public products$: Observable<ProductCard[]> =
    this.productsSubject.asObservable();

  public categories$: Observable<string[]> =
    this.categoriesSubject.asObservable();

  constructor(private readonly http: HttpClient) {
    this.getAllProducts().subscribe((products) =>
      this.productsSubject.next(products)
    );
    this.getAllCategories().subscribe((categories) =>
      this.categoriesSubject.next(categories)
    );
  }

  getAllProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(`${environment.apiBaseUrl}products`);
  }

  getProductById(productId: number): Observable<ProductCard> {
    return this.http.get<ProductCard>(
      `${environment.apiBaseUrl}products/${productId}`
    );
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      `${environment.apiBaseUrl}products/categories`
    );
  }
}
