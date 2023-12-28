import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductCard } from '../models/product-card.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(`${environment.apiBaseUrl}products`);
  }

  getProductById(productId: number): Observable<ProductCard> {
    return this.http.get<ProductCard>(
      `${environment.apiBaseUrl}products/${productId}`
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      `${environment.apiBaseUrl}products/categories`
    );
  }
}
