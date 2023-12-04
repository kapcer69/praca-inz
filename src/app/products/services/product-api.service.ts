import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCard } from '../models/product-card.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private readonly http: HttpClient) {}

  getAllProducts(): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(`${environment.apiBaseUrl}products`);
  }
}
