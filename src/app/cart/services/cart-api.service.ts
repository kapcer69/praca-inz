import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductMapperService } from '../../products/services/product-mapper.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  constructor(
    private readonly http: HttpClient,
    private readonly productMapper: ProductMapperService
  ) {}

  getAllCarts(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${environment.apiBaseUrl}carts`);
  }

  getCartById(id: number): Observable<CartItem> {
    return this.http.get<CartItem>(`${environment.apiBaseUrl}carts/${id}`);
  }
}
